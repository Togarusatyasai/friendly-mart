import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./Home";
import Nav  from "./Nav";
import Footer from "./Footer";
import Vegetables from "./Vegetables";
import Login from "./Login";

function Fr_App(){
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
       </Routes>
       </BrowserRouter>
    );

}
export default Fr_App;
