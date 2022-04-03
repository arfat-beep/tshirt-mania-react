import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import OrderReview from "./components/OrderReview/OrderReview";
import GrandPa from "./components/GrandPa/GrandPa";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/orderreview" element={<OrderReview></OrderReview>} />
        <Route path="/grandpa" element={<GrandPa></GrandPa>} />
      </Routes>
    </div>
  );
}

export default App;
