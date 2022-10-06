import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Meal from '../Components/Meal/Meal';
import Sidebar from '../Components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            
            <Header></Header>
            
            
            
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;