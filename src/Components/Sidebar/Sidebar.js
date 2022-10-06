import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import Meal from '../Meal/Meal';
import MealDetails from '../MealDetails/MealDetails';

const Sidebar = (props) => {
    console.log(props)
    const [categoris, setCatagoris] = useState([])
    // console.log(categoris)
  
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(res => res.json())
        .then(data =>setCatagoris(data.meals))
    },[])
    
    const meals = useLoaderData()
    // console.log(meal)
    // const mealloader = meal.meals
    // console.log(mealloader)
    return (
            <div className='mx-32 grid grid-cols-2'>
           <div>
           <h1 className='text-white'>Category</h1>
            <div className='mt-4'>
            <form role="search">
                <input
                placeholder="Search" />
               
            </form>
            <form className='mt-4'>
                <button className='bg-red-400 p-2 rounded-lg' type="submit">New</button>
            </form>
            </div>
            <nav>
            <div className='w-48'>
               {
                categoris.map(catagory => <Catagory catagory={catagory}></Catagory>)
               }

             
            </div>
            </nav>
           </div>

           <div  className='grid grid-cols-3 justify-items-center gap-4 mt-12'>
           {
                meals?.meals?.map(meal   => <MealDetails meal={meal}></MealDetails>)
            }
           </div>
           
        </div>
    );
};

export default Sidebar;