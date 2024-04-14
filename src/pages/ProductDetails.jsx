import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetail, setProductDetails] = useState(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
            .then((res) => {
                setProductDetails(res);
            })
    }, [])
    return (
        <div>
            <h2>Our Store Product Details</h2>
            <span>Product Details</span>
            <div className="product-grid" style={{width:"35%", margin: "auto", textAlign:"center"}}>
                {productDetail ? (
                    <div className="">
                        <img src={productDetail.thumbnail} alt={productDetail.title} />
                      <p>{productDetail.title} - {productDetail.price}</p>
                      <p>{productDetail.description}</p>
                      <p>Total Price: {productDetail.price}$</p><p>Discount Percentage : {productDetail.discountPercentage}%</p>
                      <p>Rating: {productDetail.rating}</p> 
                      <p>Stocks : {productDetail.stock}</p>
                      <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                        <img style={{width: "100px",height:"100px", objectFit:"cover",}} src={productDetail.images[0]} alt="" />
                        <img style={{width: "100px",height:"100px", objectFit:"cover",}} src={productDetail.images[1]} alt="" />
                        <img style={{width: "100px",height:"100px", objectFit:"cover",}} src={productDetail.images[2]} alt="" />
                        <img style={{width: "100px",height:"100px", objectFit:"cover",}} src={productDetail.images[3]} alt="" />
                      </div>
                    </div>
                ) : <p>Loading...</p>
                }
            </div>
        </div>
    )
}


export default ProductDetails