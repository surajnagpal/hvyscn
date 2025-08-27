"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"
import { Filter } from "lucide-react"

const products = [
  { id: "1", name: "Neon Hoodie", price: 89, image: "/Products/Men's Hoodie.png", category: "Hoodies" },
  { id: "2", name: "Cyber Tee", price: 45, image: "/Products/Tee.png", category: "T-Shirts" },
  { id: "3", name: "Future Jacket", price: 159, image: "/Products/Jacket.png", category: "Jackets" },
  { id: "5", name: "Hologram Shirt", price: 55, image: "/Products/6.png", category: "T-Shirts" },
  { id: "6", name: "Matrix Hoodie", price: 95, image: "/Products/5.png", category: "Hoodies" },
  { id: "7", name: "Quantum Jacket", price: 179, image: "/Products/7.png", category: "Jackets" },
]

const categories = ["All", "Hoodies", "T-Shirts", "Jackets"]

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="neon-text">Catalogue</span>
          </h1>
          <p className="text-gray-400 text-lg">Explore our complete collection of future streetwear</p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center space-x-2 glass px-4 py-2 rounded-lg mb-4"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>

          <motion.div
            initial={false}
            animate={{ height: showFilters ? "auto" : "auto" }}
            className={`${showFilters ? "block" : "hidden"} md:block`}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category ? "bg-cyan-500 text-black font-semibold" : "glass hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
