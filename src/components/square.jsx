import React, { Component } from 'react';
import ToDoItem from './todoItem';

class Square extends Component {

  constructor(props) {
    super(props);

    this.state = {Items: JSON.parse(this.props.todos)};

    this.addItem = this.addItem.bind(this);

    this.handlerUpdate = this.handlerUpdate.bind(this);
    this.hadlerDelete = this.hadlerDelete.bind(this);
  }
  hadlerDelete(index) {
    let tmpItems = this.state.Items;
    tmpItems.splice(index, 1);
    
    this.setState({Items: tmpItems});

    localStorage.setItem(`items${this.props.id}`, JSON.stringify(this.state.Items));
  }
  handlerUpdate(item, index) {
    let tmpItems = this.state.Items;
    tmpItems[index] = item;
    
    this.setState({Items: tmpItems});

    localStorage.setItem(`items${this.props.id}`, JSON.stringify(this.state.Items));
  }
  addItem() {
    let tmpItems = this.state.Items;
    tmpItems.push("");
    
    this.setState({Items: tmpItems});
    localStorage.setItem(`items${this.props.id}`, JSON.stringify(this.state.Items));
  }
  render() {
    return (
      <div className={`square ${this.props.renderClass}`} style={{backgroundColor: this.props.color}} onClick={this.props.clickFunction} id={this.props.id} >
        
        <button className="btn btn--category">
          <img src={this.props.imgSrc} alt=""/>
        </button>

        <div className="square_list">
          <button className="btn--add" onClick={this.addItem}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUyIDUyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MiA1MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8cGF0aCBkPSJNMjYsMEMxMS42NjQsMCwwLDExLjY2MywwLDI2czExLjY2NCwyNiwyNiwyNnMyNi0xMS42NjMsMjYtMjZTNDAuMzM2LDAsMjYsMHogTTM4LjUsMjhIMjh2MTFjMCwxLjEwNC0wLjg5NiwyLTIsMiAgcy0yLTAuODk2LTItMlYyOEgxMy41Yy0xLjEwNCwwLTItMC44OTYtMi0yczAuODk2LTIsMi0ySDI0VjE0YzAtMS4xMDQsMC44OTYtMiwyLTJzMiwwLjg5NiwyLDJ2MTBoMTAuNWMxLjEwNCwwLDIsMC44OTYsMiwyICBTMzkuNjA0LDI4LDM4LjUsMjh6IiBmaWxsPSIjMDAwMDAwIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
          </button>
          <ul>
            {
              this.state.Items.map((item, index) => {
                return <ToDoItem key={index} initText={item} hadlerDelete={this.hadlerDelete} handlerUpdate={this.handlerUpdate} index={index} />
              })
            } 
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Square;
