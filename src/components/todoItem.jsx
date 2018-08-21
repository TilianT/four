import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.tmpText = "";

    this.state = {itemClass: "", menuClass: "", itemValue: this.props.initText};

    this.handlerInput = this.handlerInput.bind(this);
    this.hadnlerClick = this.hadnlerClick.bind(this);
    this.handlerEdit = this.handlerEdit.bind(this);
    this.handlerClickEdit = this.handlerClickEdit.bind(this);
    this.handlerClickDelete = this.handlerClickDelete.bind(this);
    this.handlerClickReject = this.handlerClickReject.bind(this);
    this.handlerClickSave = this.handlerClickSave.bind(this);
  }
  handlerInput(e) {
    this.tmpText = e.target.value;
  }
  handlerClickSave(e) {
    e.stopPropagation();

    this.setState({itemClass: ""});

    this.setState({itemValue: this.tmpText});
  }
  handlerClickReject(e) {
    e.stopPropagation();

    this.setState({itemClass: ""});
  }
  handlerClickDelete(e) {
    e.stopPropagation();

    this.setState({itemClass: 'deleted'});
  }
  handlerClickEdit(e) {
    e.stopPropagation();

    let newClass = this.state.itemClass === "edit" ? "" : "edit";

    this.textInput.focus();

    this.setState({itemClass: newClass});
  }
  handlerEdit(e) {
    e.stopPropagation();
    
    if(this.state.itemClass === "edit") {
      this.setState({itemClass: ""});
    }

    let newClass = this.state.menuClass === "menu" ? "" : "menu";

    this.setState({menuClass: newClass});
  }
  hadnlerClick() {
    let newClass = this.state.itemClass === "done" ? "" : "done";

    this.setState({itemClass: newClass});
  }
  render() {
    return (
      <div className={`todo_item ${this.state.itemClass} ${this.state.menuClass}`}>
      
        <div className="todo_item__main">

          <div className="todo_item__top" onClick={this.hadnlerClick}>
            <p>{this.state.itemValue}</p>
          </div>

          <div className="todo_item__bottom">
            <input 
              type="text" 
              onChange={this.handlerInput}
              ref={(input) => { this.textInput = input; }} 
              />
          </div>

        </div>

        <div className="todo_item__btns">
          <button className="btn btn--open" onClick={this.handlerEdit}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPHBhdGggZD0iTTM2MC43MzEsMjI5LjA3NWwtMjI1LjEtMjI1LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwcy01LjMsMTMuOCwwLDE5LjFsMjE1LjUsMjE1LjVsLTIxNS41LDIxNS41ICAgYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0YzMuNCwwLDYuOS0xLjMsOS41LTRsMjI1LjEtMjI1LjFDMzY1LjkzMSwyNDIuODc1LDM2NS45MzEsMjM0LjI3NSwzNjAuNzMxLDIyOS4wNzV6ICAgIiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
          </button>

          <button className="btn btn--edit" onClick={this.handlerClickEdit}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU1LjI1IDU1LjI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NS4yNSA1NS4yNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01Mi42MTgsMi42MzFjLTMuNTEtMy41MDgtOS4yMTktMy41MDgtMTIuNzI5LDBMMy44MjcsMzguNjkzQzMuODEsMzguNzEsMy44LDM4LjczMSwzLjc4NSwzOC43NDkgIGMtMC4wMjEsMC4wMjQtMC4wMzksMC4wNS0wLjA1OCwwLjA3NmMtMC4wNTMsMC4wNzQtMC4wOTQsMC4xNTMtMC4xMjUsMC4yMzljLTAuMDA5LDAuMDI2LTAuMDIyLDAuMDQ5LTAuMDI5LDAuMDc1ICBjLTAuMDAzLDAuMDEtMC4wMDksMC4wMi0wLjAxMiwwLjAzbC0zLjUzNSwxNC44NWMtMC4wMTYsMC4wNjctMC4wMiwwLjEzNS0wLjAyMiwwLjIwMkMwLjAwNCw1NC4yMzQsMCw1NC4yNDYsMCw1NC4yNTkgIGMwLjAwMSwwLjExNCwwLjAyNiwwLjIyNSwwLjA2NSwwLjMzMmMwLjAwOSwwLjAyNSwwLjAxOSwwLjA0NywwLjAzLDAuMDcxYzAuMDQ5LDAuMTA3LDAuMTEsMC4yMSwwLjE5NiwwLjI5NiAgYzAuMDk1LDAuMDk1LDAuMjA3LDAuMTY4LDAuMzI4LDAuMjE4YzAuMTIxLDAuMDUsMC4yNSwwLjA3NSwwLjM3OSwwLjA3NWMwLjA3NywwLDAuMTU1LTAuMDA5LDAuMjMxLTAuMDI3bDE0Ljg1LTMuNTM1ICBjMC4wMjctMC4wMDYsMC4wNTEtMC4wMjEsMC4wNzctMC4wM2MwLjAzNC0wLjAxMSwwLjA2Ni0wLjAyNCwwLjA5OS0wLjAzOWMwLjA3Mi0wLjAzMywwLjEzOS0wLjA3NCwwLjIwMS0wLjEyMyAgYzAuMDI0LTAuMDE5LDAuMDQ5LTAuMDMzLDAuMDcyLTAuMDU0YzAuMDA4LTAuMDA4LDAuMDE4LTAuMDEyLDAuMDI2LTAuMDJsMzYuMDYzLTM2LjA2M0M1Ni4xMjcsMTEuODUsNTYuMTI3LDYuMTQsNTIuNjE4LDIuNjMxeiAgIE01MS4yMDQsNC4wNDVjMi40ODgsMi40ODksMi43LDYuMzk3LDAuNjUsOS4xMzdsLTkuNzg3LTkuNzg3QzQ0LjgwOCwxLjM0NSw0OC43MTYsMS41NTcsNTEuMjA0LDQuMDQ1eiBNNDYuMjU0LDE4Ljg5NWwtOS45LTkuOSAgbDEuNDE0LTEuNDE0bDkuOSw5LjlMNDYuMjU0LDE4Ljg5NXogTTQuOTYxLDUwLjI4OGMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwyLjc5LDUxLjA0NWwyLjU1NC0xMC43MjhsNC40MjItMC40OTEgIGwtMC41NjksNS4xMjJjLTAuMDA0LDAuMDM4LDAuMDEsMC4wNzMsMC4wMSwwLjExYzAsMC4wMzgtMC4wMTQsMC4wNzItMC4wMSwwLjExYzAuMDA0LDAuMDMzLDAuMDIxLDAuMDYsMC4wMjgsMC4wOTIgIGMwLjAxMiwwLjA1OCwwLjAyOSwwLjExMSwwLjA1LDAuMTY1YzAuMDI2LDAuMDY1LDAuMDU3LDAuMTI0LDAuMDk1LDAuMTgxYzAuMDMxLDAuMDQ2LDAuMDYyLDAuMDg3LDAuMSwwLjEyNyAgYzAuMDQ4LDAuMDUxLDAuMSwwLjA5NCwwLjE1NywwLjEzNGMwLjA0NSwwLjAzMSwwLjA4OCwwLjA2LDAuMTM4LDAuMDg0QzkuODMxLDQ1Ljk4Miw5LjksNDYsOS45NzIsNDYuMDE3ICBjMC4wMzgsMC4wMDksMC4wNjksMC4wMywwLjEwOCwwLjAzNWMwLjAzNiwwLjAwNCwwLjA3MiwwLjAwNiwwLjEwOSwwLjAwNmMwLDAsMC4wMDEsMCwwLjAwMSwwYzAsMCwwLjAwMSwwLDAuMDAxLDBoMC4wMDEgIGMwLDAsMC4wMDEsMCwwLjAwMSwwYzAuMDM2LDAsMC4wNzMtMC4wMDIsMC4xMDktMC4wMDZsNS4xMjItMC41NjlsLTAuNDkxLDQuNDIyTDQuMjA0LDUyLjQ1OWwwLjc1Ny0wLjc1NyAgQzUuMzUxLDUxLjMxMiw1LjM1MSw1MC42NzksNC45NjEsNTAuMjg4eiBNMTcuNTExLDQ0LjgwOUwzOS44ODksMjIuNDNjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQsMCAgTDE2LjA5Nyw0My4zOTVsLTQuNzczLDAuNTNsMC41My00Ljc3M2wyMi4zOC0yMi4zNzhjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQsMEwxMC40NCwzNy43MzggIGwtMy4xODMsMC4zNTRMMzQuOTQsMTAuNDA5bDkuOSw5LjlMMTcuMTU3LDQ3Ljk5MkwxNy41MTEsNDQuODA5eiBNNDkuMDgyLDE2LjA2N2wtOS45LTkuOWwxLjQxNS0xLjQxNWw5LjksOS45TDQ5LjA4MiwxNi4wNjd6IiBmaWxsPSIjMDAwMDAwIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
          </button>

          <button className="btn btn--save" onClick={this.handlerClickSave}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=" />
          </button>

          <button className="btn btn--reject" onClick={this.handlerClickReject}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIxMi45ODIgMjEyLjk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjEyLjk4MiAyMTIuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnIGlkPSJDbG9zZSI+Cgk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7IiBkPSJNMTMxLjgwNCwxMDYuNDkxbDc1LjkzNi03NS45MzZjNi45OS02Ljk5LDYuOTktMTguMzIzLDAtMjUuMzEyICAgYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyLDBsLTc1LjkzNyw3NS45MzdMMzAuNTU0LDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyLDBjLTYuOTg5LDYuOTktNi45ODksMTguMzIzLDAsMjUuMzEyICAgbDc1LjkzNyw3NS45MzZMNS4yNDIsMTgyLjQyN2MtNi45ODksNi45OS02Ljk4OSwxOC4zMjMsMCwyNS4zMTJjNi45OSw2Ljk5LDE4LjMyMiw2Ljk5LDI1LjMxMiwwbDc1LjkzNy03NS45MzdsNzUuOTM3LDc1LjkzNyAgIGM2Ljk4OSw2Ljk5LDE4LjMyMiw2Ljk5LDI1LjMxMiwwYzYuOTktNi45OSw2Ljk5LTE4LjMyMiwwLTI1LjMxMkwxMzEuODA0LDEwNi40OTF6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
          </button>
          
          <button className="btn btn--delete" onClick={this.handlerClickDelete}>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDc3NC4yNjYgNzc0LjI2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzc0LjI2NiA3NzQuMjY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTY0MC4zNSw5MS4xNjlINTM2Ljk3MVYyMy45OTFDNTM2Ljk3MSwxMC40NjksNTI2LjA2NCwwLDUxMi41NDMsMGMtMS4zMTIsMC0yLjE4NywwLjQzOC0yLjYxNCwwLjg3NSAgICBDNTA5LjQ5MSwwLjQzOCw1MDguNjE2LDAsNTA4LjE3OSwwSDI2NS4yMTJoLTEuNzRoLTEuNzVjLTEzLjUyMSwwLTIzLjk5LDEwLjQ2OS0yMy45OSwyMy45OTF2NjcuMTc5SDEzMy45MTYgICAgYy0yOS42NjcsMC01Mi43ODMsMjMuMTE2LTUyLjc4Myw1Mi43ODN2MzguMzg3djQ3Ljk4MWg0NS44MDN2NDkxLjZjMCwyOS42NjgsMjIuNjc5LDUyLjM0Niw1Mi4zNDYsNTIuMzQ2aDQxNS43MDMgICAgYzI5LjY2NywwLDUyLjc4Mi0yMi42NzgsNTIuNzgyLTUyLjM0NnYtNDkxLjZoNDUuMzY2di00Ny45ODF2LTM4LjM4N0M2OTMuMTMzLDExNC4yODYsNjcwLjAwOCw5MS4xNjksNjQwLjM1LDkxLjE2OXogICAgIE0yODUuNzEzLDQ3Ljk4MWgyMDIuODR2NDMuMTg4aC0yMDIuODRWNDcuOTgxeiBNNTk5LjM0OSw3MjEuOTIyYzAsMy4wNjEtMS4zMTIsNC4zNjMtNC4zNjQsNC4zNjNIMTc5LjI4MiAgICBjLTMuMDUyLDAtNC4zNjQtMS4zMDMtNC4zNjQtNC4zNjNWMjMwLjMyaDQyNC40MzFWNzIxLjkyMnogTTY0NC43MTUsMTgyLjMzOUgxMjkuNTUxdi0zOC4zODdjMC0zLjA1MywxLjMxMi00LjgwMiw0LjM2NC00LjgwMiAgICBINjQwLjM1YzMuMDUzLDAsNC4zNjUsMS43NDksNC4zNjUsNC44MDJWMTgyLjMzOXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cmVjdCB4PSI0NzUuMDMxIiB5PSIyODYuNTkzIiB3aWR0aD0iNDguNDE4IiBoZWlnaHQ9IjM5Ni45NDIiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cmVjdCB4PSIzNjMuMzYxIiB5PSIyODYuNTkzIiB3aWR0aD0iNDguNDE4IiBoZWlnaHQ9IjM5Ni45NDIiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cmVjdCB4PSIyNTEuNjkiIHk9IjI4Ni41OTMiIHdpZHRoPSI0OC40MTgiIGhlaWdodD0iMzk2Ljk0MiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
          </button>
        </div>
        
      </div>
    );
  }
}

export default ToDoItem;
