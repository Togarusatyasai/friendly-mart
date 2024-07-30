import {BrowserRouter, Router,Route} from "react-router-dom";
import Home from "./component/Home";
import Nav  from "./Nav";
import Footer from "./Footer";
import Vegetables from "./Vegetables";

function Fr_App(){
    return (
       <BrowserRouter>
       <Router>
        <Route path="/" component={}></Route>
       </Router>
       </BrowserRouter>
    );

}
export default Fr_App;
