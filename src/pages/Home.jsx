import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-indigo-600 hover:bg-indigo-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Welcome to E-Malls</h1>
        <p className="mt-6 text-lg opacity-80">
          Discover multiple stores in one seamless shopping experience
        </p>
        <Link
          to="/products"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Categories Preview */}
      <section className="p-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Fashion</h3>
            <p className="mt-2 text-gray-600">
              Trendy outfits and accessories
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Electronics</h3>
            <p className="mt-2 text-gray-600">
              Latest gadgets and devices
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Home Essentials</h3>
            <p className="mt-2 text-gray-600">
              Everything for your home
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}