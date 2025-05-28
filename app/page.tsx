import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedProducts />
    </div>
  )
}
