"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Muhammod Wali Mussa",
    role: "Managing Director",
    bio: "Leading the vision and strategy, ensuring innovation and growth across all departments.",
    image: "/teamImages/wali.jpeg",
  },
  {
    name: "Suraj Nagpal",
    role: "Director",
    bio: "Driving design excellence and tech aspects.",
    image: "/teamImages/suraj.jpeg",
  },
  {
    name: "Dhruwwark Ron Talukdar",
    role: "Director",
    bio: "Crafting impactful marketing strategies to connect the brand deeply with Gen Z audiences.",
    image: "/teamImages/ron.jpeg",
  },
  // {
  //   name: "Abdur Raafae Tahir",
  //   role: "Director",
  //   bio: "Overseeing technology and innovation to deliver seamless e-commerce solutions.",
  //   image: "/placeholder.svg?height=300&width=300",
  // },
  {
    name: "Sanay Lele",
    role: "Head of Marketing",
    bio: "Leading marketing campaigns and brand growth through data-driven insights and creativity.",
    image: "/teamImages/sanay.jpeg",
  },
  {
    name: "Hardik Malhotra",
    role: "Head of Sales",
    bio: "Driving sales strategy and partnerships to expand market presence and revenue.",
    image: "/teamImages/hardik.jpeg",
  },
  // {
  //   name: "Ankush Koshal",
  //   role: "Head of Finance",
  //   bio: "Managing financial planning, budgeting, and ensuring sustainable business growth.",
  //   image: "/placeholder.svg?height=300&width=300",
  // },
  {
    name: "Alexandros Baladakis",
    role: "Tech Lead",
    bio: "Leading the development team to build scalable, robust fashion e-commerce platforms.",
    image: "/teamImages/alex.jpeg",
  },
  {
    name: "Malik Lethabo Kgoboge",
    role: "Tech Lead",
    bio: "Driving technical innovation and ensuring top-notch performance in all tech projects.",
    image: "/teamImages/Malik.jpeg",
  },
]

export default function Team() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text">Our Team</span>
          </h1>
          <p className="text-xl text-gray-300">The minds behind the future of streetwear</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  width={128} // match your w-32 h-32 in Tailwind (128px)
                  height={128}
                  quality={100} // max quality
                  unoptimized
                  className="rounded-full mx-auto object-cover border-2 border-cyan-400"
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
