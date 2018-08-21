import React, { Component } from 'react';
import ToDoItem from './todoItem';

class Square extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className={`square ${this.props.renderClass}`} style={{backgroundColor: this.props.color}} onClick={this.props.clickFunction} id={this.props.id} >
        
        <button className="btn">
          <img src={this.props.imgSrc} alt=""/>
        </button>

        <div className="square_list">
          <ul>
            {
              this.props.todos.map((item, index) => {
                return <ToDoItem key={index} initText={item} />
              })
            } 
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Square;
