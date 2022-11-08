import React from 'react';

import {Link} from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar'>
               <div>
                <Link to= '/home' className ='text-3xl font-bold underline text-slate-900'>Glavnaya </Link>
                <Link  className =' text-slate-100 ' to='/'>dwdsd </Link>
                <Link to='#'>Tovari</Link>
                <Link to='#'>Otzivi</Link>
                <Link to='#'>ofrmit zakaz</Link>
               </div>
            </div>
            
        </div>
    );
};

export default Sidebar;