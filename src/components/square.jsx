import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
      <div className={`square ${this.props.renderClass}`} style={{backgroundColor: this.props.color}} onClick={this.props.clickFunction} id={this.props.id} >
        
        <button className="btn">
          <img src={this.props.imgSrc} alt=""/>
        </button>

        <div className="square_list">
          <ul>
            <li>Пункт №1</li>
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Square;
