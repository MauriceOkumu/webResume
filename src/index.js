console.log('Hello world');
import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Portfolio from './Portfolio.js';
import About from './About.js'
 
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
        <Counter />
        <About />
        <Portfolio data={this.state}/>
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