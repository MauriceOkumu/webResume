import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseLike, decreaseLike } from '../actions/actions.js';

class LikeCounter extends Component{
  render(){
    return(
      <div className="counter"> 
        <h2> Like this page </h2>
        <div onClick={() => this.props.increaseLike()}> Like </div>
        <p onClick={() => this.props.decreaseLike()}> Dislike </p>
        <p>{this.props.Likecurrent}</p>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('My likes object', state)
  return {
    Likecurrent: state.LikeCurrentReducer,
  };
} 

const mapDispatchToProps = dispatch => bindActionCreators({ increaseLike, decreaseLike}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LikeCounter);