import { useParams } from "react-router-dom"

export default function ProductDetails() {
  const { id } = useParams()

  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 2999,
      description: "Premium quality running shoes.",
      image: "https://believeintherun.com/wp-content/uploads/2023/08/Nike-InfinityRN-4-rock.jpg"
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 15999,
      description: "Smartwatch with advanced features.",
      image: "https://helios-i.mashable.com/imagery/articles/06BptNQigdob7ayQu0wyd0G/hero-image.fill.size_1200x1200.v1662651836.jpg"
    },
    {
      id: 3,
      name: "Headphones",
      price: 1999,
      description: "Noise cancelling wireless headphones.",
      image: "http://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg"
    }
  ]

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div className="p-10">Product not found</div>
  }

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">
          {product.name}
        </h1>

        <p className="text-gray-600 mt-4">
          {product.description}
        </p>

        <p className="text-2xl font-semibold mt-4">
          ₹{product.price}
        </p>

      </div>
    </div>
  )
}