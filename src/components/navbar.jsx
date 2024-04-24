import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";


import { logoImg } from "../assets/images/index";

const Navbar = () => {
  return (
    <nav className="w-full h-4 container text-white flex justify-between">
      <div className="m-8 lg:my-8 lg:mx-32">
        <img src={logoImg} alt="" />
      </div>  
      <div className="flex lg:my-8 lg:mx-[-24rem]">
        <div className="flex gap-10 lg:gap-20 ">
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/our-story"}>Our Story</Link>
        </div>
        <hr className="border-l bg-white h-4 my-1 mx-10" />
        <div className="flex gap-10  lg:gap-20 text-2xl">
            <CiSearch />
            <CiShoppingCart />
            <CiUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
