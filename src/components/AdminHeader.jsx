import "./Home.css";
import Footer from "./Footer";
import Categories from "./Categories";
const AdminHeader = () => {
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
        <a className="n2" href=""><i className="fa-solid fa-layer-group"></i><Categories></Categories></a>
        <a className="n2" href="">Add Category</a>
        <a className="n2" href="">Add Product</a>
        <a className="n2" href=""><i className="fa-solid fa-bag-shopping"></i>AllOrders</a>
        <a className="n2" href=""><i className="fa-regular fa-user"></i>Logout</a>

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

    <h1 id="sub_head">Grocery</h1>
        <div className="main_fig">
            <figure >
               <a href=""> <img className="imgs" src="https://st.depositphotos.com/2451847/3181/i/950/depositphotos_31812997-stock-photo-rice-in-gunny-bag-with.jpg"/></a>
                <figcaption>White Rice</figcaption>
                <figcaption>₹ 50/kg</figcaption>
            </figure>
            <figure>
             <a href="">  <img className="imgs" src="https://images-na.ssl-images-amazon.com/images/I/71aIVWt58%2BL.SX679.jpg" /></a>
                <figcaption>Freedom Oil</figcaption>
                <figcaption>₹ 150/kg</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://tse4.mm.bing.net/th?id=OIP.BQ9JkWVKIOSq4eIahlT5AgHaE8&pid=Api&P=0&h=220" /></a>
                <figcaption>Sugar</figcaption>
                <figcaption>₹ 40/kg</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://tse2.mm.bing.net/th?id=OIP.JeNpWdtbTzXKPOk8-utMGQHaFZ&pid=Api&P=0&h=220" /></a>
                <figcaption>Moong Dal</figcaption>
                <figcaption>₹ 100/kg</figcaption>
            </figure>
            <figure>
             <a href="">   <img className="imgs" src="https://5.imimg.com/data5/SELLER/Default/2022/3/WQ/FT/ID/3642811/1kg-tata-salt-packet-1000x1000.jpg" /></a>
                <figcaption>TATA Salt</figcaption>
                <figcaption>₹ 50/kg</figcaption>
            </figure>
        </div>

        <h1 id="sub_head">Kitchen</h1>
        <div className="main_fig">
            <figure >
               <a href=""> <img className="imgs" src="https://m.media-amazon.com/images/I/715IH2IbEhL.SL1500.jpg"/></a>
                <figcaption>Steel Set</figcaption>
                <figcaption>₹ 3999rs</figcaption>
            </figure>
            <figure>
             <a href="">  <img className="imgs" src="https://i5.walmartimages.com/asr/5fd88e3e-33ed-4e71-aa41-01240c300f0f_1.2ecedf3eb0dc215dfe669fc5a4e97ea0.jpeg" /></a>
                <figcaption>Non Stick</figcaption>
                <figcaption>₹ 2500rs</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://m.media-amazon.com/images/I/611lcgpTRqL.SL1500.jpg" /></a>
                <figcaption>Idli Cooker</figcaption>
                <figcaption>₹ 500rs</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="http://cdn.shopclues.com/images/detailed/5750/268dosatawa_1405482463.png" /></a>
                <figcaption>Fry Pan</figcaption>
                <figcaption>₹ 800rs</figcaption>
            </figure>
            <figure>
             <a href="">   <img className="imgs" src="https://5.imimg.com/data5/QE/OE/MY-2831414/non-stick-cookware-set.jpg" /></a>
                <figcaption>Pans Combo</figcaption>
                <figcaption>₹ 2500rs</figcaption>
            </figure>
        </div>
        <h1 id="sub_head">Snacks</h1>
        <div className="main_fig">
            <figure >
               <a href=""> <img className="imgs" src="https://www.jiomart.com/images/product/original/491696354/lay-s-american-style-cream-onion-potato-chips-90-g-product-images-o491696354-p590121272-0-202307142033.jpg?im=Resize=(360,360)"/></a>
                <figcaption>Lays</figcaption>
                <figcaption>₹ 49rs</figcaption>
            </figure>
            <figure>
             <a href="">  <img className="imgs" src="https://www.jiomart.com/images/product/original/490373600/bingo-achaari-masti-mad-angles-66-g-product-images-o490373600-p490373600-0-202211081536.jpg?im=Resize=(360,360)" /></a>
                <figcaption>Bingo</figcaption>
                <figcaption>₹ 59rs</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://www.jiomart.com/images/product/original/491695463/britannia-good-day-cashew-biscuits-1-kg-product-images-o491695463-p590116903-0-202308241215.jpg?im=Resize=(360,360)" /></a>
                <figcaption>GoodDay</figcaption>
                <figcaption>₹ 500rs</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://www.jiomart.com/images/product/original/491417086/lal-classic-mysore-pak-200-g-product-images-o491417086-p491417086-0-202307142033.jpg?im=Resize=(360,360)" /></a>
                <figcaption>Mysore Pak</figcaption>
                <figcaption>₹ 200rs</figcaption>
            </figure>
            <figure>
             <a href="">   <img className="imgs" src="https://www.jiomart.com/images/product/original/490005201/mountain-dew-2-25-l-product-images-o490005201-p490005201-0-202405171854.jpg?im=Resize=(360,360)" /></a>
                <figcaption>Mountain Dew</figcaption>
                <figcaption>₹ 60rs/ltr</figcaption>
            </figure>
        </div>

        <h1 id="sub_head">Skin Care</h1>
        <div className="main_fig">
            <figure >
               <a href=""> <img className="imgs" src="https://www.jiomart.com/images/product/original/490180137/nivea-caring-lip-balm-original-care-4-8-g-product-images-o490180137-p490180137-0-202405271915.jpg?im=Resize=(360,360)"/></a>
                <figcaption>Nivea Lipbalm</figcaption>
                <figcaption>₹ 165rs</figcaption>
            </figure>
            <figure>
             <a href="">  <img className="imgs" src="https://www.jiomart.com/images/product/original/491899823/glow-lovely-advanced-multi-vitamin-cream-110-g-product-images-o491899823-p590084001-0-202306031054.jpg?im=Resize=(360,360)" /></a>
                <figcaption>Glow & Lovley</figcaption>
                <figcaption>₹ 295rs</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://www.jiomart.com/images/product/original/490998044/nivea-soft-light-moisturiser-cream-for-face-hands-body-300-ml-product-images-o490998044-p490998044-0-202305301942.jpg?im=Resize=(360,360)" /></a>
                <figcaption>Moisturiser</figcaption>
                <figcaption>₹ 550rs</figcaption>
            </figure>
            <figure>
               <a href=""> <img className="imgs" src="https://www.jiomart.com/images/product/original/490871345/himalaya-neem-purifying-face-wash-200-ml-0-20210723.jpg?im=Resize=(360,360)" /></a>
                <figcaption>Facewash</figcaption>
                <figcaption>₹ 200rs</figcaption>
            </figure>
            <figure>
             <a href="">   <img className="imgs" src="https://www.jiomart.com/images/product/original/590113046/whitetone-face-powder-pearl-75-g-0-20210208.jpg?im=Resize=(360,360)" /></a>
                <figcaption>White Tone</figcaption>
                <figcaption>₹ 130rs</figcaption>
            </figure>
        </div>



</main>

    <Footer></Footer>
    </>
    )
}
export default AdminHeader;