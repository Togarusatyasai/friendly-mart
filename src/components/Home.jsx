 import React from "react";
import "./Home.css";
const Home = ()=> {
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
        <a className="n2" href="#"><i className="fa-solid fa-house"></i>Home</a>
        <a className="n2" href="#"><i className="fa-solid fa-layer-group"></i>Categories</a>
        <a className="n2" href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a>
        <a className="n2" href="#"><i className="fa-regular fa-user"></i>Login/SignUp</a>
    </div>
</header>
<main>
    <div className="label">
        <img className="label1" />
    </div>
    <h1 id="sub_head">Vegetables</h1>
    <div className="main_fig">
        <figure>
            <a href="#" ><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.OBKKA27v0VUeDTRMhzG_gAHaFX&pid=Api&P=0&h=180" /></a>
            <figcaption>Tomato's</figcaption>
            <figcaption>₹ 100/kg</figcaption>
        </figure>
        <figure>
            <a href="#" ><img className="imgs" src="http://seed2plant.in/cdn/shop/products/greenbrinjalseeds.jpg?v=1603446035" /></a>
            <figcaption>Brinjal</figcaption>
            <figcaption>₹ 40/kg</figcaption>
        </figure>
        <figure>
            <a href="#" ><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.jmIWiX6tjIisDDykR3rWGgHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Cabbage</figcaption>
            <figcaption>₹ 30/kg</figcaption>
        </figure>
        <figure>
            <a href="#" ><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.qbtfTieEpOA4y66SY0zvEAHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Cauliflower</figcaption>
            <figcaption>₹ 30/kg</figcaption>
        </figure>
        <figure>
            <a href="#" ><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.8m1P9KMHaWO2Wc_6iMGXiwAAAA&pid=Api&P=0&h=180" /></a>
            <figcaption>Bottle gourd</figcaption>
            <figcaption>₹ 60/kg</figcaption>
        </figure>
    </div>
    <h1 id="sub_head">Fruits</h1>
    <div className="main_fig">
        <figure>
            <a href="#"><img className="imgs" src="https://tse4.explicit.bing.net/th?id=OIP.JoiX45QQx6NYUIbdmPHEBgHaFQ&pid=Api&P=0&h=180" /></a>
            <figcaption>Apple</figcaption>
            <figcaption>₹ 200/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.fnqfC9PPRS4-TUj2OLSYeQHaF0&pid=Api&P=0&h=180" /></a>
            <figcaption>Pomegranate</figcaption>
            <figcaption>₹ 350/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.Sq672O7CrJr4mi4zNTYi0AHaFj&pid=Api&P=0&h=180" /></a>
            <figcaption>Kiwi</figcaption>
            <figcaption>₹ 450/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse3.mm.bing.net/th?id=OIP.S4vStN6YTAQFwkkFGc3QQwHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Dragon Fruit</figcaption>
            <figcaption>₹ 500/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse3.mm.bing.net/th?id=OIP.HKKlQ7poF1Bt3dGkFzNSEwHaE6&pid=Api&P=0&h=180" /></a>
            <figcaption>Grapes</figcaption>
            <figcaption>₹ 150/kg</figcaption>
        </figure>
    </div>
    <h1 id="sub_head">Dry Fruits</h1>
    <div className="main_fig">
        <figure>
            <a href="#" ><img className="imgs" src="https://tse2.mm.bing.net/th?id=OIP.S9Cqtt2_Vt3ocdmTyoIr-wHaEw&pid=Api&P=0&h=180" /></a>
            <figcaption>Almonds</figcaption>
            <figcaption>₹ 1,150/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse2.mm.bing.net/th?id=OIP.ZGA1CMVj7xo8t1ZtSGsuvwHaFU&pid=Api&P=0&h=180" /></a>
            <figcaption>Cashewnuts</figcaption>
            <figcaption>₹ 1,500/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse2.mm.bing.net/th?id=OIP.Fe1cFUbH2gPB3lL9PaSUPQHaE8&pid=Api&P=0&h=180" /></a>
            <figcaption>Walnuts</figcaption>
            <figcaption>₹ 1,650/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.GkBFpnPP4QeJa5UodcMNAgHaF6&pid=Api&P=0&h=180" /></a>
            <figcaption>Dates</figcaption>
            <figcaption>₹ 500/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.37xf3UIdFfkM0xcA3k6I2QHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Anjeer</figcaption>
            <figcaption>₹ 1500/kg</figcaption>
        </figure>
    </div>
    <h1 id="sub_head">Dairy Farm</h1>
    <div className="main_fig">
        <figure>
            <a href="#"><img className="imgs" src="https://m.media-amazon.com/images/I/61SX+-MJY7L.SL1500.jpg" /></a>
            <figcaption>Milk</figcaption>
            <figcaption>₹ 60/ltr</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="http://upload.wikimedia.org/wikipedia/commons/f/fd/Western-pack-butter.jpg" /></a>
            <figcaption>Butter</figcaption>
            <figcaption>₹ 250/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.cEB4Wzl40jshh6fgDZ2naAHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Ghee</figcaption>
            <figcaption>₹ 550/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse2.mm.bing.net/th?id=OIP.2um5tSF6wlZrZEJTf92jGwHaE8&pid=Api&P=0&h=180" /></a>
            <figcaption>Panner</figcaption>
            <figcaption>₹ 450/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://i.ytimg.com/vi/a7DfUyBqjxU/maxresdefault.jpg" /></a>
            <figcaption>Curd</figcaption>
            <figcaption>₹ 150/kg</figcaption>
        </figure>
    </div>
</main>
<hr/>
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
export default Home;