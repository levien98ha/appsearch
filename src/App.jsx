import React, {Component} from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './page/home'
import Information from './page/information'
class App extends Component {
    render(){
    return ( 
        <Router>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/:name"  render={({match}) => (
                 <Information name={match.params.name}/> 
                )}
            />
        </Router>
    );
}}

export default App;