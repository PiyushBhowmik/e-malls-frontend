export default function VendorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Vendor Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold">My Products</h2>
        <p className="mt-2 text-gray-600">Total Products: 12</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
        <p className="text-gray-600">This month sales: ₹45,000</p>
      </div>
    </div>
  )
}