import React from "react";
import "./Nav.css"
const Nav = ()=>{
    return(
        <>
        <header className="nav">
        <div className="nav1">
        <img className="inav1" src="https://i.ibb.co/qytkQJ1/fm1.png" />
        <div className="int">
            <input className="inp" type="text" name="search" placeholder="Search here.." />
            <a href=""><i className="fa fa-search " aria-hidden="true"></i></a>
        </div>
    </div>
    <div className="nav2">
        <a className="n2" href=""><i className="fa-solid fa-house"></i>Home</a>
        <a className="n2" href=""><i className="fa-solid fa-layer-group"></i>Categories</a>
        <a className="n2" href=""><i className="fa-solid fa-cart-shopping"></i>Cart</a>
        <a className="n2" href=""><i className="fa-regular fa-user"></i>Login/SignUp</a>
    </div>
</header>
        </>
    );

}
export default Nav;