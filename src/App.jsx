import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
    </div>
  );
};

export default App;
