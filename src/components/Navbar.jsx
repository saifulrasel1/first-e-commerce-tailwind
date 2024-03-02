import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left side  */}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} onClick={()=> setNav(!nav)}></AiOutlineMenu>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span> </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black rounded-full text-white p-2'>Delivery</p>
                    <p>Pickup</p>
                </div>
            </div>

            {/* right side  */}
            <div className='flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[350px] lg:w-[500px]'>
                <AiOutlineSearch size={25}></AiOutlineSearch>
                <input className='bg-transparent w-full p-2 focus:outline-none' type="text" placeholder='Search' />
            </div>
            {/* cart  */}
            <button className='bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full '>
                <BsFillCartFill size={30} className='mr-2'></BsFillCartFill> <span className='text-xl font-semibold'>Cart</span>
            </button>

            {/* mobile menu  */}

            {/* sidebar  */}
            <div className={
                nav ? ' absolute fixed top-0 left-0 w-[300px] bg-gray-200 z-120 h-screen ' : 'absolute fixed top-0 left-[-100%] w-[300px]  bg-gray-200 z-100  '
            }>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl p-4 '>Best <span className='font-bold'>Eats</span>
                    </h2>
                    <AiOutlineClose size={30} className='mr-4 cursor-pointer' onClick={()=>setNav(!nav)}></AiOutlineClose>
                </div>
                <nav>
                    <ul className='flex flex-col text-gray-800 p-4'>
                        <li className='flex items-center mb-4'>
                            <TbTruckDelivery className="mr-4" size={25}></TbTruckDelivery>
                            Orders
                        </li>
                        <li className='flex items-center mb-4'>
                            <MdFavorite className="mr-4" size={25}></MdFavorite>
                            Favorites
                        </li>
                        <li className='flex items-center mb-4'>
                            <FaWallet className="mr-4" size={25}></FaWallet>
                            Wallet
                        </li>
                        <li className='flex items-center mb-4'>
                            <TbTruckDelivery className="mr-4" size={25}></TbTruckDelivery>
                            Help
                        </li>
                        <li className='flex items-center mb-4'>
                            <MdHelp className="mr-4" size={25}></MdHelp>
                            Promotions
                        </li>
                        <li className='flex items-center mb-4'>
                            <AiFillTag className="mr-4" size={25}></AiFillTag>
                            Best Ones
                        </li>
                        <li className='flex items-center mb-4'>
                            <BsFillSaveFill className="mr-4" size={25}></BsFillSaveFill>
                            Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;