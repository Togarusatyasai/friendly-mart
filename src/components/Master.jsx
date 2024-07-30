import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./component/Home";
import Nav  from "./Nav";
import Footer from "./Footer";
import Vegetables from "./Vegetables";

function Fr_App(){
    return (
        <Router>
            <div>
                <switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/nav" component={Nav}></Route>
                    <Route exact path="/footer" component={Footer}></Route>
                    <Route exact path="/vegetables" component={Vegetables}></Route>
                </switch>
            </div>
        </Router>
    );

}
export default Fr_App;
