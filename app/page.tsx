import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import About from '@/components/About'
import ProductCat from '@/components/ProductCat'
import Layanan from '@/components/Layanan'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductCat />
        <Layanan />
      </main>
      <Footer />
    </>
  )
}