// AddProductPage.jsx
import React, { useState } from "react";
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
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => reject(error),
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadURL);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.image || !product.price || !product.name || !product.description) {
            return toast.error("All fields are required!");
        }

        if (isNaN(product.price) || product.price <= 0) {
            return toast.error("Invalid price!");
        }

        try {
            setLoading(true);
            const toastId = toast.loading("Uploading Image...");
            const imageUrl = await uploadImage();
            toast.dismiss(toastId);
            toast.success("Image uploaded successfully!");

            const newProduct = {
                imageUrl,
                price: parseFloat(product.price),
                discount: product.discount ? parseFloat(product.discount) : 0,
                name: product.name,
                description: product.description,
                createdAt: new Date(),
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
        <div className="section_max">
            <form className="section_loop" onSubmit={handleSubmit}>
                <div>
                    <label>Upload Image:</label>
                    <input type="file" name="image" onChange={handleChange} />
                </div>
                <div>
                    <label>Product Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Product Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Offer Price:</label>
                    <input type="number" name="discount" value={product.discount} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={product.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit" disabled={loading}>Add Product</button>
            </form>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default AddProductPage;
