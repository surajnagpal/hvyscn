"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="glass rounded-xl overflow-hidden hover:neon-glow transition-all duration-500">
        <div className="relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <button className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors">
              Quick View
            </button>
          </motion.div>
        </div>

        <div className="p-6">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">{product.category}</p>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
          <p className="text-2xl font-bold text-white">${product.price}</p>
        </div>
      </div>
    </motion.div>
  )
}
