import React from 'react'
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] flex items-center bg-[#d6d6d6] rounded-[10px] relative ">
      <input className=" w-full h-[35px] focus:outline-none bg-inherit px-6 my-2 text-[15px] " type="text" placeholder='Search for product...' />
      <Button className=" !absolute right-[8px] !w-[37px] z-50 !min-w-[37px] h-[37px] !rounded-full text-[#2c2c2c] "><IoSearch className=' h-[30px] text-[#5d5d5d] text-[22px] '/></Button>
    </div>
    
  )
}

export default Search
