import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Checkout() {
  const { cart, totalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    navigate("/order-summary")
  }

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <hr className="my-4" />
            <h2 className="text-xl font-bold">
              Total: ₹{totalPrice}
            </h2>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  )
}