import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from './components/Cart'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/details/:id" element={<ProductDetails/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
