import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer.jsx";
import Product from "./pages/product.jsx";
import Home from "./pages/home.jsx";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
