import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then(res => res.json())
            .then((res) => {
                const sliceRes = res.products.slice(0, 6)
                setTrendingProducts(sliceRes)
            })
    }, [])

    return (
        <div>
            <h1>Our Store</h1>
            <span>Trending Topics 🌦️⛈️</span>
            <div className="product-grid">
                {trendingProducts.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={`${product.title} image`} />
                                <h3>{product.title}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>

            <Link to="/products">
                <button style={{padding:"2px"}}>View all Products</button>
            </Link>
        </div>
    )
}

export default Home
