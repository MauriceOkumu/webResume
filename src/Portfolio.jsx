import React from 'react';
 
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    this.props.map((item, index) => {

    return (
      <div>
        My Portfolio will be rendered and shown here.
        <ul>
          <li key={index}>{item}</li>
        </ul>
      </div>
    );
    })
  }
}
export default Portfolio;