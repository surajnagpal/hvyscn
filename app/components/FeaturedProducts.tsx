"use client"

import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

const featuredProducts = [
  {
    id: "1",
    name: "Neon Hoodie",
    price: 89,
    image: "/placeholder.svg?height=400&width=400",
    category: "Hoodies",
  },
  {
    id: "2",
    name: "Cyber Tee",
    price: 45,
    image: "/placeholder.svg?height=400&width=400",
    category: "T-Shirts",
  },
  {
    id: "3",
    name: "Future Jacket",
    price: 159,
    image: "/placeholder.svg?height=400&width=400",
    category: "Jackets",
  },
  {
    id: "4",
    name: "Tech Pants",
    price: 99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Pants",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="neon-text">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover our latest drops and most popular pieces</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
