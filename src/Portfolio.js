import React from 'react';
 
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
   console.log(this.props.data)
   let { title, url, src } = this.props.data
    return (
      <div>
        My Portfolio will be rendered and shown here.
        <h1>{title}</h1>
        <img src={url} alt="pictures of the works will be shown here" />
        <br/>
        <a href={src}>link to pictures</a>
      </div>
    );
  
  }
}
export default Portfolio;