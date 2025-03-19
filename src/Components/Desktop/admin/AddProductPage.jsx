// AddProductPage.jsx
import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { fireDB, storage } from "../../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./AddProductPage.css";

const AddProductPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({
        image: null,
        price: "",
        discount: "",
        name: "",
        discountPoint: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const uploadImage = async () => {
        if (!product.image) {
            throw new Error("No image selected!");
        }

        const storageRef = ref(storage, `productImages/${product.image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, product.image);

        return new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => reject(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => resolve(downloadURL))
                        .catch((error) => reject(error));
                }
            );
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.image || !product.price || !product.name || !product.description) {
            return toast.error("All fields are required!");
        }

        try {
            setLoading(true);
            toast.loading("Uploading Image...");

            const imageUrl = await uploadImage();
            toast.dismiss();
            toast.success("Image uploaded successfully!");

            const newProduct = {
                name: product.name,
                price: parseFloat(product.price),
                discount: parseFloat(product.discount) || 0,
                discountPoint: parseFloat(product.discountPoint) || 0,
                description: product.description,
                imageUrl: imageUrl,
                createdAt: Timestamp.now(),
            };

            console.log("📌 Sending data to Firestore:", newProduct);

            await addDoc(collection(fireDB, "products"), newProduct);

            toast.success("Product added successfully!");
            setLoading(false);
            navigate("/admin-dashboard");
        } catch (error) {
            console.error("❌ Firestore error:", error);
            toast.error("Failed to add product.");
            setLoading(false);
        }
    };

    return (
        <>
            <div className="section_max">
                <div>
                    <form className="section_loop" onSubmit={handleSubmit}>
                        <div>
                            <label>Upload Image:</label>
                            <input type="file" name="image" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input type="number" name="price" value={product.price} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Discount:</label>
                            <input type="number" name="discount" value={product.discount} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Product Name:</label>
                            <input type="text" name="name" value={product.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Discount Point:</label>
                            <input type="number" name="discountPoint" value={product.discountPoint} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea name="description" value={product.description} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" disabled={loading}>Add Product</button>
                    </form>
                    {loading && <p>Loading...</p>}
                </div>
            </div>
        </>
    );
};

export default AddProductPage;