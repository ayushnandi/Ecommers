import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

export default function Navigation() {

  const [isOpenCatPanel, setIsOpenCatPanel ] = useState(false); 
  const openCategoryPanel=(value) => {
    setIsOpenCatPanel(value);
  }

  return (
    <>
    <nav>
      <div className="container flex items-center justify-end py-1 gap-6  ">
        <div className="col1 w-[20%]">
            <Button onClick={() => openCategoryPanel(true)}  className="!text-black gap-[4px] w-full ">
              <MenuIcon/> Shop By Categories <FaAngleDown className='ml-auto '/>
            </Button>
        </div>
        <div className="col2 w-[60%] ">
          <ul className="flex items-center justify-around gap-6 ">
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Home</Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Groceries </Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Beauty </Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Wellness </Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Fashion </Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Fashion </Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Electronics</Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Bags</Link>
            </li>
            <li>
              <Link className="link text-[15px] font-[500] " to={"/"} >Jewellery</Link>
            </li>
          </ul>
        </div>
        <div className="col3 w-[25%] ">
          <div className='flex justify-end'>
            <Button to={"/delivery"} className="link  !text-black font-[500] gap-3 " > <RocketLaunchIcon/> Free International Delivery</Button>
          </div>
        </div>
      </div>
    </nav>
    <CategoryPanel 
        openCategoryPanel={openCategoryPanel} 
        isOpenCatPanel={isOpenCatPanel} 
      />
    </>
  )
}
