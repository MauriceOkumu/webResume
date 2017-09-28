import React,{ Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Connect from './Connect.jsx';
import Navbar from './Navbar.jsx';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	title:'Let us build a web app',
    	url:'http://www.google.com',
    	src:'http://www.codeacademy.com'
    }
  }
 
  render() {
    return (
      <main>
      <Switch>
        <Route path="/" exact component={Navbar} />
        <Route path="/about" component={About} />
        <Route path="/connect" component={Connect} />
        <Route path="/portfolio" component={Portfolio} /> 
        <Redirect to="/" />
      </Switch>
    </main>
    );
  }
};
 
document.addEventListener('DOMContentLoaded', function() {
  render(<BrowserRouter>
       <App />
      </BrowserRouter>
    ,
    document.getElementById('mount')
  );
});

// <div>
//         <Navbar />
//         <About />
//         <Portfolio data={this.state}/>
//         <Connect />
//       </div>