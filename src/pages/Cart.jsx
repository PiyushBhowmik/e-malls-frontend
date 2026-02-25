import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function Cart() {
  const {
    cart,
    removeFromCart,
    totalPrice,
    increaseQty,
    decreaseQty
  } = useContext(CartContext)

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">
              Total: ₹{totalPrice}
            </h2>

            <Link
              to="/checkout"
              className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}