const Admin = ()=>{
 
    return(
        <>
        <nav>
            <div>FriendlyMart</div>
            <div className="nav_1">
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <input type="text" placeholder="Search here"></input>
            </div> 

            <div  className="nav_2">
                   <a href="#">Add Category</a>
                   <a href="#">Add Items</a>
                   <a href="#">All orders</a>
                   <a href="#">Assign Orders Delivery</a>
                   <a href="#">Logout</a>
                   
            </div>
        </nav>
        </>
    )
}
export default Admin;