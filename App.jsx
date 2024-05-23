import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import About3 from "./components/About/About3"
import About2 from "./components/About/About2"
import Contact from "./components/Contact/Contact"
import Pricing from "./components/Pricing/Pricing"
import AppBanner from "./components/AppBanner/AppBanner"
import Testimonial from "./components/Testimonial/Testimonial"
import Footer from "./components/Footer/Footer"


function App() {

  return (
<div> 
  <Navbar />
  <Hero />
  <About />
  <About2 />
  <About3/>
  <Contact />
  <Pricing />
  <AppBanner />
  <Testimonial />
  <Footer />
  </div>
  )
}

export default App
