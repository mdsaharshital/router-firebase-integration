import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Orders/Order";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/orders"
          element={
            <RequiredAuth>
              <Order />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
