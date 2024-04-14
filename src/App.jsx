import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductListing from "./pages/ProductListing"
import ProductDetails from "./pages/ProductDetails"
import Breadcrumbs from "./pages/components/Breadcrumbs"

function App() {


  return (
    <>


      <BrowserRouter>

      <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
