import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';


const Root = () => {
    return (
        <BrowserRouter>
           <Sidebar/>
        <Routes>
      
            <Route  path='/' element= {<Header/>}/>
            </Routes>
        </BrowserRouter>
       
    );
};

export default Root;