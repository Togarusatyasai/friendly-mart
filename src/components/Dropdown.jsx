import React from 'react'
import { Link } from 'react-router-dom'


export default function Dropdown() {

    const available = [
        {
             
            text: "Kitchen items",
            url: "/Kitchen"

        },
        {
             
            text: "Grocery items",
            url: "/grocery"
        },
        {
            
            text: "Vegetables items",
            url: "/vegetable"
        },
        {
             
            text: "Meat items",
            url: "/meat"
        },
        {
            
            text: "Bakery items",
            url: "/bakery "
        },
        {
             
            text: "Dry fruits",
            url: "/dryfruits"
        },
        {
            
            text: "Fruits ",
            url: "/fruits"
        },
        {
             
            text: "Skin items",
            url: "/skincare"
        }
         

    ]

    return (
        <div className="dropdown container">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
                {available.map((e) => {
                    return <Link to={e.url} key={e.img}>
                      
                           
                            <strong>{e.text}</strong>
                        
                    </Link>

                })}
            </div>
        </div>

    )
}