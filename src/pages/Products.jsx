import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { WishlistContext } from "../context/WishlistContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Products() {
  const { addToCart } = useContext(CartContext)
  const { addToWishlist } = useContext(WishlistContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 2999,
      brand: "Nike",
      rating: 4,
      image: "https://believeintherun.com/wp-content/uploads/2023/08/Nike-InfinityRN-4-rock.jpg"
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 15999,
      brand: "Apple",
      rating: 5,
      image: "https://helios-i.mashable.com/imagery/articles/06BptNQigdob7ayQu0wyd0G/hero-image.fill.size_1200x1200.v1662651836.jpg"
    },
    {
      id: 3,
      name: "Headphones",
      price: 1999,
      brand: "Beats",
      rating: 3,
      image: "http://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg"
    }
  ]

  const [maxPrice, setMaxPrice] = useState(20000)
  const [selectedBrand, setSelectedBrand] = useState("")
  const [minRating, setMinRating] = useState(0)

  const filteredProducts = products.filter(product =>
    product.price <= maxPrice &&
    (selectedBrand === "" || product.brand === selectedBrand) &&
    product.rating >= minRating
  )

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="font-semibold">Max Price: ₹{maxPrice}</label>
          <input
            type="range"
            min="1000"
            max="20000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Brand</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          >
            <option value="">All</option>
            <option value="Nike">Nike</option>
            <option value="Apple">Apple</option>
            <option value="Sony">Sony</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Minimum Rating</label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-full p-2 border rounded mt-2"
          >
            <option value="0">All</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      {/* Skeleton Loader */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md animate-pulse"
            >
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 mt-4 w-3/4 rounded"></div>
              <div className="h-4 bg-gray-300 mt-2 w-1/2 rounded"></div>
              <div className="h-8 bg-gray-300 mt-4 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-xl shadow-md transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-4">
                  {product.name}
                </h2>
              </Link>

              <p className="text-gray-600 mt-1">
                Brand: {product.brand}
              </p>

              <p className="text-amber-500">
                {"★".repeat(product.rating)}
              </p>

              <p className="text-gray-600 mt-2">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg w-full"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(product)}
                className="mt-2 bg-gray-200 text-black px-4 py-2 rounded-lg w-full"
              >
                Add to Wishlist
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
