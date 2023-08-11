import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopContextProveder from "./context/ShopContext";

function App() {
  return (
    <>
    <ShopContextProveder>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </ShopContextProveder>  
    </>
  );
}

export default App;
