import React,{ Component } from 'react';
 
class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
   //let { title, url, src } = this.props.data
    return (
      <div>
        My Portfolio will be rendered and shown here.
        <ul>
          <li>Snapflix</li>
          <li>Llama</li>
          <li>Hran</li>
          <li>Gamefest</li>
          <li>My Website</li>
        </ul>
      </div>
    );
  
  }
}
export default Portfolio;
        // <h1>{title}</h1>
        // <img src={url} alt="pictures of the works will be shown here" />
        // <br/>
        // <a href={src}>link to pictures</a>