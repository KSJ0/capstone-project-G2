import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaBox,
    FaRegCalendarCheck,
}from "react-icons/fa";

import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import '../Styles/Sidebar.css'
import Header from './Header'



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/UserManagements",
            name:"UserManagements",
            icon:<FaUserAlt/>
        },
        {
            path:"/Products",
            name:"Products",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Stocks",
            name:"Stocks",
            icon:<FaBox/>
        },
        {
            path:"/Sales",
            name:"Sales",
            icon:<FaRegChartBar/>
        },

        {
            path:"/Reports",
            name:"Reports",
            icon:<FaRegCalendarCheck/>
        },

        {
            path:"/Email",
            name:"Email",
            icon:<FaCommentAlt/>
        },
       
    ]
    return (

       <div> <Header/>  
        <div className="container">
           
        <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                
                <div style={{marginLeft: isOpen ? "148px" : "-4px"}} className="bars">
                    <BsFillArrowRightCircleFill onClick={toggle}/>
                    
                </div>
            </div>
            
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
             
        </div>
        
        <main>{children}
        </main>

        
       
     </div>
    
     
     </div>

     
     
    
 );
};

export default Sidebar;