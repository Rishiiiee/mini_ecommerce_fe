import React from 'react';
import { Link, NavLink } from "react-router-dom"
import { Navlinks } from '../../Data/Navlink';
import { TiShoppingCart } from "react-icons/ti";


function Navbar () {
    return (

        <div style={{display:"flex",height:"80px", alignItems:"center",justifyContent:"",padding:"0px",textAlign:"center",backgroundColor:"whitesmoke"}}>
            <div style={{width:"20%"}}>
                <h1>Navbar</h1>
            </div>
            <div style={{display:"flex", alignItems:"center",width:"80%",justifyContent:"space-around",textAlign:"center"}}>
                {Navlinks.map((el)=> (<div><NavLink key={el.id} to={el.path} style={({isActive})=>({ textDecoration: 'none',color: isActive ? 'blue' : 'black',})}>{el.text}</NavLink></div>))}
                
                <NavLink to="/cartpage" style={({isActive})=>({ textDecoration: 'none',color: isActive ? 'blue' : 'black',})}><TiShoppingCart style={{fontSize: "25px"}} /></NavLink>
                
            </div>
        </div>
    )
}
export default Navbar;
