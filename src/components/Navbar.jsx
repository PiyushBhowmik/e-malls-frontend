import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Navbar() {
  const { cart } = useContext(CartContext)

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold text-black">
        E-Malls
      </h1>

      <div className="flex items-center gap-6 font-medium">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/shops" className="hover:text-blue-600">
          Shops
        </Link>

        <Link to="/products" className="hover:text-blue-600">
          Products
        </Link>
        
        <Link to="/wishlist" className="hover:text-blue-600">
          Wishlist
        </Link>

        {/* Cart with badge */}
        <Link
          to="/cart"
          className="relative hover:text-blue-600"
        >
          Cart

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
        
        <Link to="/login" className="hover:text-blue-600">
          Login
        </Link>
        
        <Link to="/register" className="hover:text-blue-600">
          Register
        </Link>
     </div>
    </nav>
  )
}