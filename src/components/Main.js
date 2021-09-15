import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Gifts from "./Gifts";
import Destinations from "./Destinations";
import Home from "./Home";
import Footer from "./Footer";
import { Switch, Route, Redirect} from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/about' component ={About} />
                <Route exact path='/gifts' component={Gifts} />
                <Route exact path='/destinations' component={ Destinations } />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main