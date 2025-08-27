// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// interface Product {
//   id: string
//   name: string
//   price: number
//   image: string
//   category: string
// }

// interface ProductCardProps {
//   product: Product
//   index: number
// }

// export default function ProductCard({ product, index }: ProductCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -10 }}
//       className="group cursor-pointer"
//     >
//       <div className="glass rounded-xl overflow-hidden hover:neon-glow transition-all duration-500">
//         <div className="relative overflow-hidden">
//           <Image
//             src={product.image || "/placeholder.svg"}
//             alt={product.name}
//             width={400}
//             height={400}
//             className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <button className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors">
//               Quick View
//             </button>
//           </motion.div>
//         </div>

//         <div className="p-6">
//           <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">{product.category}</p>
//           <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
//           <p className="text-2xl font-bold text-white">£{product.price}</p>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
"use client"

import { useState } from "react"
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
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
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
              <button
                onClick={() => setShowPopup(true)}
                className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors"
              >
                Order
              </button>
            </motion.div>
          </div>

          <div className="p-6">
            <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">{product.category}</p>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
            <p className="text-2xl font-bold text-white">£{product.price}</p>
          </div>
        </div>
      </motion.div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md mx-4 text-center text-white shadow-2xl border border-gray-700/50 relative overflow-hidden">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Orders Paused
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed">
                We have currently paused orders. Please check back later for production availability.
              </p>
              
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
