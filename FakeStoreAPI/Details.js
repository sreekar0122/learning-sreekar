import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Details() {
    const { id } = useParams(); // Extract the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-details">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className="product-image" />
            <p><b>Price:</b> ${product.price}</p>
            <p><b>Description:</b> {product.description}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Rating:</b> {product.rating.rate}</p>
            <p><b>Count:</b> {product.rating.count}</p>
        </div>
    );
}

export default Details;
