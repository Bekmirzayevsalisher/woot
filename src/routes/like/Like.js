
import React from 'react'
import "./Like.css"
 import { Link } from 'react-router-dom'
import { FcLike } from "react-icons/fc";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { BsArrowLeftShort } from "react-icons/bs";

function Liked() {
  return (
    <>
       <diV className="short-div">   <Link to="./"> <BsArrowLeftShort   className='short'/></Link></diV>
    <div className="container-like">


    


    <div className='licedContainer'>
       <div className="liked-img-container">
        <img  src="https://images.hindustantimes.com/tech/img/2023/06/23/1600x900/iPhone_13_pro_Unsplash_1687513616203_1687513634987.jpg" alt="" />
       </div>
       <div className="liced-text-container">
        <h5>Iphone 15 pro max 1TB 1100$ </h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit.</h6>
       <div className="liced-icons">
       
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoIosStarHalf className='star' />
       </div>
       <FcLike className='likee' />
       </div>
    </div>
    <div className='licedContainer'>
       <div className="liked-img-container">
        <img  src="https://images.hindustantimes.com/tech/img/2023/06/23/1600x900/iPhone_13_pro_Unsplash_1687513616203_1687513634987.jpg" alt="" />
       </div>
       <div className="liced-text-container">
        <h5>Iphone 15 pro max 1TB 1100$ </h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit.</h6>
       <div className="liced-icons">
       
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoIosStarHalf className='star' />
       </div>
       <FcLike className='likee' />
       </div>
    </div>
    <div className='licedContainer'>
       <div className="liked-img-container">
        <img  src="https://images.hindustantimes.com/tech/img/2023/06/23/1600x900/iPhone_13_pro_Unsplash_1687513616203_1687513634987.jpg" alt="" />
       </div>
       <div className="liced-text-container">
        <h5>Iphone 15 pro max 1TB 1100$ </h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit.</h6>
       <div className="liced-icons">
       
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoIosStarHalf className='star' />
       </div>
       <FcLike className='likee' />
       </div>
    </div>
    <div className='licedContainer'>
       <div className="liked-img-container">
        <img  src="https://images.hindustantimes.com/tech/img/2023/06/23/1600x900/iPhone_13_pro_Unsplash_1687513616203_1687513634987.jpg" alt="" />
       </div>
       <div className="liced-text-container">
        <h5>Iphone 15 pro max 1TB 1100$ </h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit.</h6>
       <div className="liced-icons">
       
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoStarSharp className='star' />
        <IoIosStarHalf className='star' />
       </div>
       <FcLike className='likee' />
       </div>
    </div>
    </div>
    </>
  )
}

export default Liked