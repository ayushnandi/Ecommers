import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
// import ShoppingCartRoundedIcon from '@mui/icons-material';

export default function Header() {
  return (
    <>
      <header>
        <div className="top-stip py-1 border-y-[1px] border-gray-400">
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

        <div className="header">
          <div className="container flex gap-3 items-center justify-between ">
            <div className="col1 w-[25%] flex justify- gap-3 py-2 ">
              <Link to={"/"}>
                <img src="/logo.png" className="h-[80px] b-[80px] " alt="" />
              </Link>
              <p className="flex items-center logo-font font-[700] text-[35px] text-gray-700 ">
                Shopping Cart
              </p>
            </div>
            <div className=" col2 w-[40%]  ">
              <Search/>
            </div>
            <div className=" col3 w-[30%] flex items-center pl-7 ">
              <div className="flex items-center justify-around">
                <div className="list-none">
                  <Link to="/login" className='link transition text-[15px] font-[500] text ' >Login</Link> | &nbsp;
                  <Link to="/register" className='link transition text-[15px] font-[500] ' >Register</Link>
                </div>              
                <div className="item-list">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}
