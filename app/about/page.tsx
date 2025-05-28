"use client"

import { motion } from "framer-motion"
import { Zap, Target, Eye } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge designs and sustainable materials",
  },
  {
    icon: Target,
    title: "Quality",
    description: "Premium craftsmanship meets street-ready durability in every piece",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Creating the future of streetwear, one design at a time",
  },
]

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="neon-text">hvyscn</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're not just a brand. We're a movement towards the future of streetwear.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Our Story</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Born from the intersection of technology and street culture, hvyscn emerged in 2024 with a singular
              vision: to redefine what streetwear means in the digital age.
            </p>
            <p>
              Our name, pronounced "heavy scene," represents the weight of our impact on fashion and the scenes we
              create. We believe in minimalism that speaks volumes, edges that cut through conformity, and a
              future-focused approach that anticipates tomorrow's trends today.
            </p>
            <p>
              Every piece we create is a statement of rebellion against the ordinary, a testament to the power of
              thoughtful design, and a bridge between the physical and digital worlds we inhabit.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-6 text-center hover:neon-glow transition-all duration-500"
            >
              <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 neon-text">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
