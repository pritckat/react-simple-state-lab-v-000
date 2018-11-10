import React, { Component } from 'react';

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  clickHandler = (e) => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
        className='cell'
        style={{backgroundColor: this.state.color}}
        onClick={this.clickHandler}>
      </div>
    )
  }
}