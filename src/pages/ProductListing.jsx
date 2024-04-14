import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                setAllProducts(res.products);
                console.log(res.products);
            })
    }, []);



    return (

        <div>
            <h2>Our Store Product Listing</h2>
            <span>Products</span>
            <div className="product-grid">
                {allProducts.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={`${product.title} image`} />
                                <span>{product.title}</span><span> - ${product.price}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div>


    );
};

export default ProductListing;
