import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import About from '@/components/About'
import ProductCat from '@/components/ProductCat'
import Layanan from '@/components/Layanan'
import Artikel from '@/components/Artikel'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductCat />
        <Layanan />
        <Artikel />
      </main>
      <Footer />
    </>
  )
}