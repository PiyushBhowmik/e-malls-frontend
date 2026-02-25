export default function CustomerProfile() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold">Account Details</h2>
        <p className="mt-2">Name: Piyush Bhowmik</p>
        <p>Email: piyush@example.com</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">My Orders</h2>
        <p className="mt-2 text-gray-600">No recent orders.</p>
      </div>
    </div>
  )
}