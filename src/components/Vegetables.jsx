import React from "react";
import "./Vegetable.css";
const Vegetables =()=>{
    return(
        <>
        <header className="nav">
        <div className="nav1">
        <img className="inav1" src="http://127.0.0.1:5501/fm1.png" />
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
   <main>
   <h1 id="sub_head">Vegetables</h1>
    <div className="main_fig">
        <figure>
            <a href=""><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.OBKKA27v0VUeDTRMhzG_gAHaFX&pid=Api&P=0&h=180" /></a>
            <figcaption>Tomato's</figcaption>
            <figcaption>₹ 100/kg</figcaption>
        </figure>
        <figure>
            <a href=""><img className="imgs" src="http://seed2plant.in/cdn/shop/products/greenbrinjalseeds.jpg?v=1603446035" /></a>
            <figcaption>Brinjal</figcaption>
            <figcaption>₹ 40/kg</figcaption>
        </figure>
        <figure>
            <a href=""><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.jmIWiX6tjIisDDykR3rWGgHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Cabbage</figcaption>
            <figcaption>₹ 30/kg</figcaption>
        </figure>
        <figure>
            <a href=""><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.qbtfTieEpOA4y66SY0zvEAHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Cauliflower</figcaption>
            <figcaption>₹ 30/kg</figcaption>
        </figure>
        <figure>
            <a href=""><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.8m1P9KMHaWO2Wc_6iMGXiwAAAA&pid=Api&P=0&h=180" /></a>
            <figcaption>Bottle gourd</figcaption>
            <figcaption>₹ 60/kg</figcaption>
        </figure>
    </div>

   </main>

<footer>
    <div className="foot">
        <div className="f1"><img className="f11" src="https://i.ibb.co/6r90CJ9/icon.png" alt="logo"/></div>
        <div className="f2">
            <p className="para"><i className="fa-solid fa-location-dot"></i>Jubilee Hills,RoadNo:7,Hyderabad,Telanagana</p>
            <p className="para"><i className="fa-solid fa-phone"></i>+91 9123456871</p>
            <p className="para"><i className="fa-solid fa-envelope"></i><span></span>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </p>
        </div>
    </div>
    <hr/>
    <div className="ft_ct">
        <p>Copyright@2024-2027.FriendlyMart...</p>
    </div>
    </footer>
        </>
    );
}
export default Vegetables;