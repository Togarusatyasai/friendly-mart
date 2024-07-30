import React from "react";
import"./Categories.css";
const Categories=()=>{
    return(
        <>
        <title>Categories</title>
         <div class="dropdown">
         Categories
        <div class="dropdown-content">
            <a  className="anc" href="#">Kitchen items</a>
            <a  className="anc" href="#">Grocery items</a>
            <a  className="anc" href="#">Vegetables</a>
            <a  className="anc" href="#">Meat items</a>
            <a  className="anc" href="#">Bakery items</a>
            <a  className="anc" href="#">Dry Fruits</a>
            <a  className="anc" href="#">Fruits</a>
            <a  className="anc" href="#">Skin items</a>
            </div>
            </div>
        </>
    );
}
export default Categories;