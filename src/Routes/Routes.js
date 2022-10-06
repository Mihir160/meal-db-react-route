import { createBrowserRouter } from "react-router-dom";
import Meal from "../Components/Meal/Meal";
import Sidebar from "../Components/Sidebar/Sidebar";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/sidebar',
                element:<Sidebar></Sidebar>,
              

             },
             {
               path:'/:meal',
               loader: async ({params}) =>{
               return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.meal}`)
                },
                element:<Sidebar></Sidebar>
            }
            
             
         
        ]
        
    }  
         
           
      
    
])