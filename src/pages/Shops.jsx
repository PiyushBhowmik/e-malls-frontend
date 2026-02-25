export default function Shops() {
  const categories = [
    "Fashion",
    "Electronics",
    "Home Essentials",
    "Beauty",
    "Sports"
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Shops & Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="mt-2 text-gray-600">
              Explore products in {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}