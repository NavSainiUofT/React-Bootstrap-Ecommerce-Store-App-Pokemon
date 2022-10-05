import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Footer } from "./components/Footer"
function App() {
  return (
    <>
    <link rel="stylesheet" href="compstyles.css"></link>
    <ShoppingCartProvider>
  <Navbar />
  <Container className="mb-4">
    
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/store" element = {<Store />} />
      <Route path="/about" element = {<About />} />
    </Routes>
  </Container>
  <Footer/>
  </ShoppingCartProvider>
  </>)
}

export default App
