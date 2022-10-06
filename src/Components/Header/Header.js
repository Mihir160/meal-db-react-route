import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)

   
    return (
        <div className='grid grid-cols-2 items-center mt-8'>
            <nav>
                <div onClick={() => setOpen(!open)} className="h-6 w-6 bg-purple-500  md:hidden">
                    {
                      open ? <XMarkIcon/> : <Bars3Icon/>
                    }
                </div>
                <div className={` md:flex justify-center duration-300 ease-in md:static     w-full 
                absolute ${open ? 'top' : 'top-[-120px]'}`}>
                   <div className='text-white p-2 hover:bg-red-700 rounded-lg'>
                    <Link to='/home'>Home</Link>

                   </div>
                   <div className='text-white p-2 hover:bg-red-700 rounded-lg'>
                    <Link to='/favorites'>Favorite</Link>

                   </div>
                   <div className='text-white p-2 hover:bg-red-700 rounded-lg'>
                    <Link to='/about'>About</Link>

                   </div>
                   

                </div>
            </nav>

            <div >
             <Link><img className='invisible lg:visible' src="https://www.themealdb.com/images/logo-small.png" alt="" /></Link>
            </div>
            
        </div>
    );
};

export default Header;