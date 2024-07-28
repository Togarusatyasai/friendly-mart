import React from "react";
import "./Footer.css"

const Footer =()=>{
    return(
        <>
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
export default Footer;