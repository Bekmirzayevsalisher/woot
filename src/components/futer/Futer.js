import React from 'react'
import "./Futer.css"
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function Futer() {
  return (
    <div className='futer-conatiner'> 

<div className="box1">
<p>Biz haqimizda</p>
<h6>Topshirish punktlari</h6>
<br />
<h6>Vakansiyalar</h6>
</div>


<div className="box2">
    <p>Foydalanuvchi    </p>
    <h6>Biz bilan bogʻlanish</h6>
    <br />
<h6>Savol-Javob</h6>
</div>


<div className="box3">
    <p>Tadbirkor</p>
    <h6>Uzumda soting</h6>
    <br />
<h6>Sotuvchi kabinetiga kirish</h6>
</div>


<div className="box4">
    <p>Ilovani yuklab olish</p>
    <div className="yuklab-olish"><FaApple className='appl' /><p>   AppStore</p>
  
    <FaGooglePlay className='play' /><p className='google'>Google Play</p>
    </div>
    <h4>Uzum ijtimoiy tarmoqlarda
    </h4>
    <RiInstagramFill  className='insta'/>
    <FaTelegram className='insta' />
    <FaFacebookSquare className='insta' />
    <IoLogoYoutube  className='insta'/>
    
</div>





    </div>
  )
}

export default Futer