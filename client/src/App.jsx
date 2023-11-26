import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Cart from "./routes/cart/Cart";
import Product from "./routes/product/Product";
import Nav from "./components/navbar/Nav";
import SideMenu from "./components/sideMenu/SideMenu";
import Background from "./components/background/Background";
import { useState } from "react";
import ContextProvider from "./context/context";
import Footer from "./components/footer/Footer";

function App() {
  const [sideMenu, setSideMenu] = useState(false);


  return (
    <ContextProvider>
      <Router>
          <Nav toggle={() => setSideMenu(true)}/>
          <SideMenu display={sideMenu} toggle={() => setSideMenu(false)}/>
          <Background display={sideMenu} toggle={() => setSideMenu(false)}/>
          <main>
            <Routes>
              <Route exact path="/" Component={Home}/>
              <Route exact path="product/:id" Component={Product}/>
              <Route exact path="/cart" Component={Cart}/>
            </Routes>
          </main>
          <Footer />
      </Router>
    </ContextProvider>
  )
}

export default App
