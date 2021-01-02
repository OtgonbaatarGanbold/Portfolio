import React from 'react';
import "./index.css";
import "../../index.js";
import "../../index2.js";
// import Slider from "../Slider/Slider";

export default function Navbar() {

    return (
       <div className="w-full flex justify-center">
           <ul className="flex flex-row justify-evenly gap-4 w-1/5 m-3 font-mono">
               <li className="border-b flex hover:opacity-40 transition duration-1000 cursor-pointer"><a className="m-1 mx-3 text-white">PORTFOLIO</a></li>
               <li className="border-b flex hover:opacity-40 transition duration-1000 cursor-pointer"><a href="../Slider/Slider.js" className="m-1 mx-3 text-white uppercase">My creation</a></li>
           </ul>
       </div> 
    )
}