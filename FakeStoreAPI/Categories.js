import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Categories() {
    const [details, setDetails] = useState([]);
    const [filteredDetails, setFilteredDetails] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        getDetails();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredDetails(details);
        } else {
            setFilteredDetails(details.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, details]);

    function getDetails() {
        axios
            .get("https://fakestoreapi.com/products")
            .then(response => {
                setDetails(response.data);
                const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }
    
    function handleDetailsClick(id) {
        navigate(`/product/${id}`);
    }

    return (
        <div className="fake">
            <h1>Fake Store Details</h1>

            {/* Category filter */}
            <div className="category-filter">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={cat === selectedCategory ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product list */}
            <div className="product-list">
                {filteredDetails.map((val) => (
                    <div key={val.id} className="product-card">
                        <b>Title:</b> {val.title}
                        <div>
                            <b>Price:</b> ${val.price}
                        </div>
                        <div>
                            <b>Description:</b> {val.description}
                        </div>
                        <div>
                            <b>Category:</b> {val.category}
                        </div>
                        <div>
                            <b>Image:</b> <img src={val.image} alt={val.title} className="product-image" />
                        </div>
                        <div>
                            <b>Rating:</b> {val.rating.rate}
                            <b>Count:</b> {val.rating.count}
                        </div>
                        <button onClick={() => handleDetailsClick(val.id)}>Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
