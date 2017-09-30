import React,{ Component } from 'react';
 
class Home extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
   //let { title, url, src } = this.props.data
    return (
      <div>
        <h3>My Home will be rendered and shown here.</h3>
        <h2>Home is the best place to be</h2>
      </div>
    );
  
  }
}
export default Home;