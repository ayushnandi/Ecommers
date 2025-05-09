import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import Navigation from './Navigation/index';


export default function Header() {
  return (
    <>
      <header>
        <div className="top-stip py-1 border-y-[1px] border-gray-300">
            <div className="container">
                <div className="flex items-center justify-between ">
                    <div className="col1 w-[50%]">
                        <p className="text-[12px] text-gray-700 font-[500] pl-5 ">Get up to 50% discount on latest trends, Limited time only </p>
                    </div>
                    <div className="col2 " >
                      <ul className=" flex  items-center justify-between  gap-3">
                        <li>
                          <Link to="help-center" className="text-[12px] link font-[500] transition" >Help Center</Link>
                        </li>
                        <li>
                          <Link to="help-center" className="text-[12px] link font-[500] transition" >Order Tracking</Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="header border-b-[1px] border-gray-300">
          <div className="container  flex gap-3 items-center justify-between ">
            <div className="col1 w-[25%] flex justify- gap-3 py-2 ">
              <Link to={"/"}>
                <img src="/logo.png" className="h-[80px] w-[80px] " alt="" />
              </Link>
              <p className="flex items-center logo-font font-[700] text-[32px] text-gray-700 ">
                Shopping Cart
              </p>
            </div>
            <div className=" col2 w-[40%]  ">
              <Search/>
            </div>
            <div className=" col3 w-[30%] flex text-gray-600 items-center justify-around pl-7 ">
              <div className="flex items-center justify-around">
                <div className="list-none">
                  <Link to="/login" className='link transition text-[15px] font-[500] ' >Login</Link> | &nbsp;
                  <Link to="/register" className='link transition text-[15px] font-[500] ' >Register</Link>
                </div>
              </div>
              <div className="item-list flex items-center gap-5 justify-between  ">
                <Button className=" !w-[37px] z-50 !min-w-[37px] h-[37px]  !text-gray-700 !rounded-full "><FavoriteBorderIcon className='link' /></Button>
                <Button className=" !w-[37px] z-50 !min-w-[37px] h-[37px]  !text-gray-700 !rounded-full "><ShoppingCartIcon className='link' /></Button>
                <Button className=" !w-[37px] z-50 !min-w-[37px] h-[37px]  !text-gray-700 !rounded-full "><EmailIcon className='link' /></Button>              
              </div>
            </div>
          </div>
        </div>
        <div className='border-b-[1px] border-gray-300'>
          <Navigation/>
        </div>

      </header>
    </>
  )
}
