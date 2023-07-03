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
import { Link } from 'react-router-dom';



import '../Styles/Sidebar.css'


const Sidebar = () => {
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
        <div className="container">
           <div style={{width: isOpen ? "280px" : "80px"}} className="sidebar">
               <div className="top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Welcome Admin</h1>
               
                   <div style={{marginLeft: isOpen ? "280px" : "70px"}}  className="bars">
                    
                       <BsFillArrowRightCircleFill onClick={toggle}/>
                
                   </div>
               </div>
               {
                   menuItem.map((item, name)=>(
                       <Link to={item.path} key={name} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           
        </div>
    );
};

export default Sidebar;