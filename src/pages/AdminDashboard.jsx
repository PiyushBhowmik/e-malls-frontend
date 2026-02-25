export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold mt-2">₹1,25,000</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold mt-2">320</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold mt-2">540</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">#101</td>
              <td className="py-2">John Doe</td>
              <td className="py-2">₹2999</td>
              <td className="py-2 text-green-600">Completed</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">#102</td>
              <td className="py-2">Jane Smith</td>
              <td className="py-2">₹15999</td>
              <td className="py-2 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}