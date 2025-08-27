"use client"

import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

const featuredProducts = [
  { id: "2", name: "Cyber Tee", price: 45, image: "/Products/Tee.png", category: "T-Shirts" },
  { id: "3", name: "Future Jacket", price: 159, image: "/Products/Jacket.png", category: "Jackets" },
  { id: "5", name: "Hologram Shirt", price: 55, image: "/Products/6.png", category: "T-Shirts" },
  { id: "6", name: "Matrix Hoodie", price: 95, image: "/Products/5.png", category: "Hoodies" },
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
            <span className="neon-text">Featured Products</span>
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
