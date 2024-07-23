import { useEffect, useState } from "react";
import axios from "axios";
import "./GetAllProducts.css"; 

function GetAllProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function(response){
                setData(response.data);
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }, []); 

    return (
        <div className="product-list">
            {data.map(product => (
                <div className="product-item" key={product.id}>
                    <div className="product-inner">
                    <img src={product.image} width={"100px"} height={"100px"} alt={product.title} />
                        <p><strong>Price:</strong> {product.price}</p>
                        <p>{product.description}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Rating:</strong> {product.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetAllProducts;
