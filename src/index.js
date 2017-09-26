console.log('Hello world');
import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: []
    }
  }
 
  render() {
    return (
      <div>
      <Counter />
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