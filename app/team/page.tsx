"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Wali Muhammad",
    role: "Creative Director",
    bio: "Visionary designer with 10+ years in streetwear and digital fashion.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Suraj Nagpal",
    role: "Head of Design",
    bio: "Former Nike designer bringing athletic innovation to street culture.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sanay Lele",
    role: "Brand Strategist",
    bio: "Marketing genius who understands the pulse of Gen Z fashion.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ron Talukdar",
    role: "Tech Lead",
    bio: "Full-stack developer building the future of fashion e-commerce.",
    image: "/placeholder.svg?height=300&width=300",
  },
    {
    name: "Hardik Hardik",
    role: "Tech Lead",
    bio: "Full-stack developer building the future of fashion e-commerce.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Team() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="neon-text">Team</span>
          </h1>
          <p className="text-xl text-gray-300">The minds behind the future of streetwear</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl p-6 text-center hover:neon-glow transition-all duration-500"
            >
              <div className="relative mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-cyan-400"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/20 to-transparent" />
              </div>

              <h3 className="text-xl font-bold mb-2 neon-text">{member.name}</h3>
              <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
