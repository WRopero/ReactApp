import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './Components/layout/Header';
import Home from './Components/layout/Home';
import Contact from './Components/layout/Contact';
import AboutUs from './Components/layout/AboutUs';
import Adminbd from './Components/layout/AdminBD';
import Paratec from './Components/layout/Paratec';

export class App extends Component {
    
    render() { 
        return (
            <Provider store={store}>
                <Router>
                        <Fragment>
                            <Header />
                            <Route exact path='/' component={Home} /> 
                            <Route exact path='/contact' component={Contact} /> 
                            <Route exact path='/about' component={AboutUs} /> 
                            <Route exact path='/adminbd' component={Adminbd} /> 
                            <Route exact path='/paratec' component={Paratec} /> 
                        </Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App;
