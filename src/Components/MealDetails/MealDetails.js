import React from 'react';
import { Outlet } from 'react-router-dom';

const MealDetails = (props) => {
    console.log(props)
     const {strMeal, strMealThumb} = props.meal
     console.log(strMeal)
    
    return (
        <div className=''>
            <div className="card w-52 bg-amber-900 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center mt-4">
                    <h2 className="card-title text-white">{strMeal}</h2>
                    
                    <div className="card-actions mt-4">
                        <button className="btn bg-red-800 p-2 rounded-lg text-white ">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MealDetails;