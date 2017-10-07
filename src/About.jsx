import React,{ Component } from 'react';
import Pic from './IMG_1160.jpg'
 
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        This is where i will talk about myself.
        Will go on and on<br/>
        <img src={Pic} alt="Family picture" />
      </div>
    );
  }
};
export default About;