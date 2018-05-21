import React, { Component } from "react";
import { connect } from "react-redux";
import { completeTask } from "../actions/actions";

class Todos extends Component {
  renderTodos() {
    return this.props.Todox.map(todo => {
      return (
        <li
          key={todo.id}
          // onclick event is passed on to the completetask method in mapDispatchToProps
          onClick={() => {
            this.props.completeTask(todo.id);
          }}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      );
    });
  }

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = state => ({
  Todox: state.todos
});

const mapDispatchToProps = dispatch => ({
  //arrow functions help us avoid bindaction creators
  completeTask: id => dispatch(completeTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
