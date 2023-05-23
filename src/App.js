import React from "react";
import './styles/app.scss';

import {BrowserRouter,Routes, Route} from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import './styles/app.scss';
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";

function App() {
  return (
   <BrowserRouter>

   <Header></Header>
   <Routes>

    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>

   </Routes>
   <Toaster></Toaster>
   
   
   </BrowserRouter>
  );
}

export default App;
