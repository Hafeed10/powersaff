import React, { useState } from 'react';
import './Add_Prodcut.css';

function Add_Prodcut() {
    const [product, setProduct] = useState({
        image: null,
        price: '',
        discount: '',
        name: '',
        discountPoint: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", product.image);
        formData.append("price", product.price);
        formData.append("discount", product.discount);
        formData.append("name", product.name);
        formData.append("discountPoint", product.discountPoint);
        formData.append("description", product.description);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/products/", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Product Added:", data);
                alert("Product added successfully!");
            } else {
                console.error("Error adding product");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <div className='section_max'>
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
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default Add_Prodcut;
