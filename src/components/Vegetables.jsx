import React from "react";
import "./Vegetable.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Vegetables =()=>{
    return(
        <>
        {/* <header className="nav">
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
    </footer> */}
    <Nav></Nav>

    <div className="veges">
            <figure>
              <a href="#"> 
              <img className="images" src="https://tse4.mm.bing.net/th?id=OIP.OBKKA27v0VUeDTRMhzG_gAHaFX&pid=Api&P=0&h=180" alt="Sorry"/>
              </a>
              <figcaption>Tomato
              <br></br>
              ₹ 100/kg
              </figcaption>
            </figure>
            <figure>
              <a href="#">
              <img className="images" src="http://seed2plant.in/cdn/shop/products/greenbrinjalseeds.jpg?v=1603446035" alt="Sorry"/>
              </a>
              <figcaption>Brinjal
              <br></br>
              ₹ 40/kg
              </figcaption>
            </figure>
            <figure>
              <a href="#">  
              <img className="images" src="https://tse4.mm.bing.net/th?id=OIP.jmIWiX6tjIisDDykR3rWGgHaHa&pid=Api&P=0&h=180" alt="Sorry"/>
              </a>
              <figcaption>Cabbage 
                <br></br>
                ₹ 30/kg
              </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://tse4.mm.bing.net/th?id=OIP.qbtfTieEpOA4y66SY0zvEAHaHa&pid=Api&P=0&h=180" alt="Sorry"/>
             </a>
             <figcaption>Cauliflower
             <br></br>
             ₹ 30/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://tse1.mm.bing.net/th?id=OIP.8m1P9KMHaWO2Wc_6iMGXiwAAAA&pid=Api&P=0&h=180" alt="Sorry"/>
             </a>
             <figcaption>Bottle Gourd
             <br></br>
             ₹ 60/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://th.bing.com/th/id/OIP.tr38uLM7QBOLElGJHG88eQHaEi?rs=1&pid=ImgDetMain" alt="Sorry"/>
             </a>
             <figcaption> Carrot
             <br></br>
             ₹ 35/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://th.bing.com/th/id/OIP.orTWDkgY0-FFuGP1J8P6oQHaHa?rs=1&pid=ImgDetMain" alt="Sorry"/>
             </a>
             <figcaption> Beetroot
             <br></br>
             ₹ 120/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://th.bing.com/th/id/OIP.zB7AATBDNYVwv3rUfXbYcwHaE8?rs=1&pid=ImgDetMain" alt="Sorry"/>
             </a>
             <figcaption>Potato
             <br></br>
             ₹ 50/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://shorturl.at/HQaWx" alt="Sorry"/>
             </a>
             <figcaption>Spinach
             <br></br>
             ₹ 85/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://www.pngmart.com/files/7/Lady-Finger-Transparent-PNG.png" alt="Sorry"/>
             </a>
             <figcaption>Ladies Finger
             <br></br>
             ₹ 35/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://th.bing.com/th/id/OIP.U0EYTacd3Og1ch5IrU9SigHaGB?w=212&h=180&c=7&r=0&o=5&pid=1.7" alt="Sorry"/>
             </a>
             <figcaption>Broccoli
             <br></br>
             ₹ 210/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://shorturl.at/OAspV" alt="Sorry"/>
             </a>
             <figcaption>Cucumber
             <br></br>
             ₹ 50/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://www.farmstop.in/admin/uploads/product_variation_images/736370470831351348672083green-hot-chili-peppers-isolated-white.jpg" alt="Sorry"/>
             </a>
             <figcaption>Green Chillies
             <br></br>
             ₹ 80/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://th.bing.com/th/id/R.9af7646cd2c518ec98eb04ab80a37ce9?rik=QZEhqzAlMe09eg&riu=http%3a%2f%2fwww.farmhouse.com.pk%2fwp-content%2fuploads%2f2017%2f03%2fbitter-gourd.jpeg&ehk=Pp3rfCat3wwWE2tO35aRMvwiScNZUXhw5hIkSApEODQ%3d&risl=&pid=ImgRaw&r=0" alt="Sorry"/>
             </a>
             <figcaption>Bitter Gourd
             <br></br>
             ₹ 90/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://th.bing.com/th/id/OIP.2RwzgJIXMd5UG-nwxk8RfgHaHa?w=750&h=750&rs=1&pid=ImgDetMain" alt="Sorry"/>
             </a>
             <figcaption>Beans
             <br></br>
             ₹ 80/kg
             </figcaption>
            </figure>
            <figure>
             <a href="#"> 
             <img className="images" src="https://cdn.shopify.com/s/files/1/1380/2059/products/Radish-Pink.jpg?v=1483533860" alt="Sorry"/>
             </a>
             <figcaption>Raddish
             <br></br>
             ₹ 50/kg
             </figcaption>
            </figure>
            
            
            
            </div>
            <Footer></Footer>
       

        </>
    );
}
export default Vegetables;