import React from 'react';
import './UserDashboard.css'

const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
        price: 61999,
        color: 'Orange',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Adidas Ultraboost 22',
        imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0a1f6b6ff1b64b978624ae7600a70f0f_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg',
        price: 22499,
        color: 'Black',
        quantity: 1,
    }
];

const UserDashboard = ({ user = { name: "Guest User", email: "guest@example.com" } }) => {
    const totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const totalItems = products.reduce((acc, product) => acc + product.quantity, 0);

    // Format price as INR
    const formatPrice = (price) =>
        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

    const orderStatus = "Confirmed"; // Can be dynamic
    const statusColors = {
        Confirmed: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Shipped: 'bg-blue-100 text-blue-800',
        Delivered: 'bg-purple-100 text-purple-800'
    };

    return (
        <div className="user-dashboard-container">
            {/* User Profile Section */}
            <div className="user-profile">
                <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="User" />
                <h1 className="summary-item">Name: {user.name}</h1>
                <h1 className="summary-value">Email: {user.email}</h1>
            </div>

            {/* Order Details Section */}
            <div className="order-details">
                <h2>Order Details</h2>

                <div className="order-summary">
                    {/* Left Panel - Order Summary */}
                    <div className="summary-left">
                        <div className="summary-grid">
                            <div>
                                <div className="summary-item">Order ID</div>
                                <div className="summary-value">#74557994327</div>
                            </div>
                            <div>
                                <div className="summary-item">Date</div>
                                <div className="summary-value">4 March, 2023</div>
                            </div>
                            <div>
                                <div className="summary-item">Total Items</div>
                                <div className="summary-value">{totalItems}</div>
                            </div>
                            <div>
                                <div className="summary-item">Total Amount</div>
                                <div className="summary-value">{formatPrice(totalAmount)}</div>
                            </div>
                            <div>
                                <div className="summary-item">Order Status</div>
                                <span className={`status-badge ${statusColors[orderStatus]}`}>
                                    {orderStatus}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Product List */}
                    <div className="product-list">
                        <ul>
                            {products.map((product) => (
                                <li key={product.id} className="product-item">
                                    <img className="product-img" src={product.imageSrc} alt={product.name} />
                                    <div className="product-info">
                                        <p className="product-name">{product.name}</p>
                                        <p className="product-color">{product.color}</p>
                                        <p className="product-quantity">x {product.quantity}</p>
                                    </div>
                                    <p className="product-price">{formatPrice(product.price)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserDashboard;
