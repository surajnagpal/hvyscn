"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Package, Mail, Phone, Check } from "lucide-react"

const contentPackages = [
  {
    name: "Essential",
    price: "£150",
    duration: "3 hours",
    description: "Perfect for small businesses and personal brands",
    features: [
      "3 hours of shooting",
      "150 edited photos",
      "Digital delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "£225",
    duration: "4 hours",
    description: "Ideal for established brands and campaigns",
    features: [
      "4 hours of shooting",
      "200 edited photos",
      "Drone footage included",
      "Advanced editing & effects",
      "Multiple outfit changes",
      "Location scouting included",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "£275",
    duration: "6 Hours",
    description: "Complete brand storytelling package",
    features: [
      "2 full days of shooting",
      "300+ edited photos",
      "10+ video clips",
      "Professional lighting setup",
      "Multiple locations",
      "Rush delivery available",
    ],
    popular: false,
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState("merchandise")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productType: "",
    quantity: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you! We'll get back to you within 24 hours.")
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="neon-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300">Bringing your vision to life with custom solutions</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2 flex">
            <button
              onClick={() => setActiveTab("merchandise")}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === "merchandise"
                  ? "bg-cyan-500 text-black font-semibold"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              <Package className="w-5 h-5 inline mr-2" />
              Custom Merchandise
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === "content" ? "bg-cyan-500 text-black font-semibold" : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              <Camera className="w-5 h-5 inline mr-2" />
              Content Creation
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "merchandise" && (
            <motion.div
              key="merchandise"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 neon-text">Custom Merchandise</h2>
                  <p className="text-gray-300 text-lg">
                    Create unique branded merchandise that represents your vision. From concept to delivery, we handle
                    everything.
                  </p>
                </div>

                <div className="glass rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Company/Organization</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                          placeholder="Company name (optional)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Product Type *</label>
                        <select
                          name="productType"
                          required
                          value={formData.productType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select product type</option>
                          <option value="t-shirts">T-Shirts</option>
                          <option value="hoodies">Hoodies</option>
                          <option value="jackets">Jackets</option>
                          <option value="accessories">Accessories</option>
                          <option value="multiple">Multiple Items</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Quantity *</label>
                        <select
                          name="quantity"
                          required
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select quantity</option>
                          <option value="1-25">1-25 pieces</option>
                          <option value="26-50">26-50 pieces</option>
                          <option value="51-100">51-100 pieces</option>
                          <option value="101-500">101-500 pieces</option>
                          <option value="500+">500+ pieces</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-500">Under $500</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-2500">$1,000 - $2,500</option>
                          <option value="2500-5000">$2,500 - $5,000</option>
                          <option value="5000+">$5,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline *</label>
                      <select
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="rush">Rush (1-2 weeks)</option>
                        <option value="standard">Standard (3-4 weeks)</option>
                        <option value="flexible">Flexible (5+ weeks)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Description *</label>
                      <textarea
                        name="description"
                        required
                        rows={5}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, design ideas, specific requirements, and any other details..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black py-4 rounded-lg font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 inline mr-2" />
                      Send Inquiry
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "content" && (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 neon-text">Content Creation</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Professional photography and videography services to showcase your brand. Our team of experienced
                  creators will bring your vision to life.
                </p>
              </div>

              {/* Packages Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contentPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass rounded-xl p-8 relative hover:neon-glow transition-all duration-500 flex flex-col ${
                      pkg.popular ? "border-2 border-cyan-400" : ""
                    }`}

                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2 neon-text">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                      <div className="text-cyan-400 font-semibold">{pkg.duration}</div>
                      <p className="text-gray-300 text-sm mt-2">{pkg.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-auto ${
                        pkg.popular
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-black hover:from-purple-500 hover:to-cyan-500"
                          : "glass hover:bg-white/10 text-white"
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="glass rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 neon-text">Ready to Create?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our creative team to discuss your project and get a custom quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:creative@hvyscn.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    hello@hvyscn.com
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="tel:+15551234567"
                    className="inline-flex items-center justify-center px-6 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 123-4567
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
