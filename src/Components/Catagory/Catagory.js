import React from 'react';
import { Link } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Catagory = (props) => {
    
    return (
        <div className=' bg-amber-800'>
        <div>
        <li className='text-white list-none p-2'><Link to={`/${props.catagory.strCategory}`}>{props.catagory.strCategory}</Link></li>
        </div>
        <div>
       
        </div>
        </div>
    );
};

export default Catagory;