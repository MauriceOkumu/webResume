console.log('Hello world');
import React from 'react';
import { render } from 'react-dom';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Connect from './Connect.jsx';
import Navbar from './Navbar.jsx';
 
class App extends React.Component {
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
      <div>
        <Navbar />
        <About />
        <Portfolio data={this.state}/>
        <Connect />
      </div>
    );
  }
}
 
document.addEventListener('DOMContentLoaded', function() {
  render(
    <App />,
    document.getElementById('mount')
  );
});