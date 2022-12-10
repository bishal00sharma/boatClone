import React from 'react';
import {Routes, Route } from "react-router-dom";
import MainCart from '../Components/Cart/MainCart';
import Products from '../Components/Headphones/Products';
import Shipping from '../Components/shipping/Shipping';
import SingleProduct from '../Components/SingleProduct/SingleProduct';
import Home from "../Components/Home/Home";
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/headphones" element={<Products />}/>
        <Route path="/singlepage/:id" element={ <SingleProduct />  }/>
        <Route path="/login" element={ <Login />  }/>
        <Route path="/signup" element={ <SignUp />  }/>
        <Route path="/cart" element={ <MainCart />  }/>
        <Route path="/shipping" element={ <Shipping />  }/>
    </Routes>
  )
}
export default AllRoutes ;