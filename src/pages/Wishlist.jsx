import { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext)

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-md mb-4 flex justify-between">
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}