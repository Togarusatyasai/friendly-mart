import "./UserHeader.css";

const AdminHeader = () => {
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
        <a className="n2" href=""><i className="fa-solid fa-layer-group"></i>Categories</a>
        <a className="n2" href="">Add Category</a>
        <a className="n2" href="">Add Product</a>
        <a className="n2" href=""><i className="fa-solid fa-bag-shopping"></i>AllOrders</a>
        <a className="n2" href=""><i className="fa-regular fa-user"></i>Logout</a>

    </div>
    </header>
    </>
    )
}
export default AdminHeader;