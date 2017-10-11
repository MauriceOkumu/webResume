import React,{ Component } from 'react';
import fakeData from './fakeData/modalData.jsx';
 
class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const data = fakeData();
    return (
      <div>
        My Portfolio will be rendered and shown here.
        <ul>
        {data.map((element, index) => <li key={index}>{element.name}</li>)}
        </ul>
      </div>
    );
  
  }
}
export default Portfolio;
        