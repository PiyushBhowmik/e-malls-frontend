export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Head Office Address:- XYZ colony, Near ABC, Navi Mumbai"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email:- E-Malls000@Xyz.com"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Phone Number:- +91 1234567891"
          className="w-full p-3 border rounded-lg"
        />
        
      </form>
    </div>
  )
}