// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, ShoppingBag } from "lucide-react"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/catalogue", label: "Catalogue" },
//     { href: "/services", label: "Services" },
//     { href: "/about", label: "About" },
//     { href: "/team", label: "Team" },
//     { href: "/contact", label: "Contact" },
//   ]

//   return (
//     <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 glass">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold neon-text">
//             hvyscn
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Cart and Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
//               <ShoppingBag className="w-5 h-5" />
//             </button>

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
//             >
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass border-t border-white/10"
//           >
//             <div className="px-4 py-4 space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBagPopup, setShowBagPopup] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold neon-text">
              hvyscn
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowBagPopup(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Empty Bag Popup */}
      <AnimatePresence>
        {showBagPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md mx-4 text-center text-white shadow-2xl border border-gray-700/50 relative overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
              
              <div className="relative z-10">
                {/* Empty bag icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Your Bag is Empty
                </h2>
                <p className="mb-8 text-gray-300 leading-relaxed">
                  Start shopping to add items to your bag.
                </p>
                
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setShowBagPopup(false)}
                    className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-600 transition-all duration-300"
                  >
                    Close
                  </button>
                  <Link
                    href="/catalogue"
                    onClick={() => setShowBagPopup(false)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}