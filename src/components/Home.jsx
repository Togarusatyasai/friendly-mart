 import React from "react";
import "./Home.css";
import "./Dropdown";
import Dropdown from "./Dropdown";
const Home = ()=> {
    return(
        <>
     <header className="nav">
        <div className="nav1">
        <img className="inav1" src="https://i.ibb.co/qytkQJ1/fm1.png" />
        <div className="int">
            <input className="inp" type="text" name="search" placeholder="Search here.." />
            <a href="https://www.google.co.in/webhp"><i className="fa fa-search " aria-hidden="true"></i></a>
        </div>
    </div>
    <div className="nav2">
        <a className="n2" href="http://localhost:5173/#"><i className="fa-solid fa-house"></i>Home</a>
        <a className="n2" href="#">
            <i className="fa-solid fa-layer-group"></i><Dropdown></Dropdown></a>
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
            <a href="" ><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.OBKKA27v0VUeDTRMhzG_gAHaFX&pid=Api&P=0&h=180" /></a>
            <figcaption>Tomato's</figcaption>
            <figcaption>₹ 100/kg</figcaption>
        </figure>
        <figure>
            <a href="" ><img className="imgs" src="http://seed2plant.in/cdn/shop/products/greenbrinjalseeds.jpg?v=1603446035" /></a>
            <figcaption>Brinjal</figcaption>
            <figcaption>₹ 40/kg</figcaption>
        </figure>
        <figure>
            <a href="" ><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.jmIWiX6tjIisDDykR3rWGgHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Cabbage</figcaption>
            <figcaption>₹ 30/kg</figcaption>
        </figure>
        <figure>
            <a href="" ><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.qbtfTieEpOA4y66SY0zvEAHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Cauliflower</figcaption>
            <figcaption>₹ 30/kg</figcaption>
        </figure>
        <figure>
            <a href="" ><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.8m1P9KMHaWO2Wc_6iMGXiwAAAA&pid=Api&P=0&h=180" /></a>
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
    <h1 id="sub_head">Meat</h1>
    <div className="main_fig">
        <figure>
            <a href="#"><img className="imgs" src="https://tawaqqo.com/wp-content/uploads/2020/04/Untitled-design-8.png" /></a>
            <figcaption>Chicken</figcaption>
            <figcaption>₹ 240/kg</figcaption> 
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.5hg5r0m5p09X5-jYKMouAgHaHa&pid=Api&P=0&h=180" /></a>
            <figcaption>Mutton</figcaption>
            <figcaption>₹ 800/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://cdn.shopify.com/s/files/1/0071/5151/7766/products/image3_1200x1200.jpeg?v=1558359670" /></a>
            <figcaption>Prawns</figcaption>
            <figcaption>₹ 500/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.5Y71QrTpud6p7jj2wGz1ggHaE8&pid=Api&P=0&h=180" /></a>
            <figcaption>Fish</figcaption>
            <figcaption>₹ 150/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://tse1.mm.bing.net/th?id=OIP.zX4iQ8H7BC94Rbv3enmE7gHaE7&pid=Api&P=0&h=180" /></a>
            <figcaption>Eggs</figcaption>
            <figcaption>₹ 180/kg</figcaption>
        </figure>
    </div>
    <h1 id="sub_head">Bakery Items</h1>
    <div className="main_fig">
        <figure>
            <a href="#"><img className="imgs" src="https://tse2.mm.bing.net/th?id=OIP.vQypvmpwtoLm-fhvpOA3wQHaEm&pid=Api&P=0&h=180" /></a>
            <figcaption>Bread</figcaption>
            <figcaption>₹ 50rs</figcaption> 
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://i2.wp.com/completelydelicious.com/wp-content/uploads/2021/02/yeast-raised-doughnuts-6.jpg" /></a>
            <figcaption>Donutes</figcaption>
            <figcaption>₹ 75rs</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://sugargeekshow.com/wp-content/uploads/2020/04/buttermilk-biscuits-featured-768x768.jpg" /></a>
            <figcaption>Biscuktes</figcaption>
            <figcaption>₹ 100rs</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg" /></a>
            <figcaption>Cake</figcaption>
            <figcaption>₹ 750/kg</figcaption>
        </figure>
        <figure>
            <a href="#"><img className="imgs" src="https://th.bing.com/th/id/OIP.LcNPHt8pMZyN7WEAywSaIAHaHa?rs=1&pid=ImgDetMain" /></a>
            <figcaption>Egg Puff</figcaption>
            <figcaption>₹ 25rs</figcaption>
        </figure>
    </div>

    <h1 id="sub_head">Rice</h1>
        <div className="main_fig">
            <figure >
               <a href=""> <img className="imgs" src="https://st.depositphotos.com/2451847/3181/i/950/depositphotos_31812997-stock-photo-rice-in-gunny-bag-with.jpg"/></a>
                <figcaption>White Rice</figcaption>
                <figcaption>₹ 50/kg</figcaption>
            </figure>
            <figure>
             <a href="">  <img className="imgs" src="https://thumbs.dreamstime.com/b/rice-sack-bag-white-background-44729981.jpg" /></a>
                <figcaption>Brown Rice</figcaption>
                <figcaption>₹ 150/kg</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://previews.123rf.com/images/antpkr/antpkr1601/antpkr160100061/51238321-red-rice-in-sack-bag.jpg" /></a>
                <figcaption>Black Rice</figcaption>
                <figcaption>₹ 150/kg</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://www.forestwholefoods.co.uk/wp-content/uploads/2017/04/Organic-Short-Grain-Brown-Rice-1500px.jpg" /></a>
                <figcaption>Brown ShortGrain</figcaption>
                <figcaption>₹ 100/kg</figcaption>
            </figure>
            <figure>
             <a href="">   <img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.njJF2nVksFfbHbzt_w2DMAHaD6&pid=Api&P=0&h=180" /></a>
                <figcaption>Rose Matt</figcaption>
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