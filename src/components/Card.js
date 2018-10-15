import React, { Component } from "react";
import { Card } from "antd";
import TodoList from "../containers/TodoList";
export default class MyCard extends Component {
  handleCheck = e => {
    console.log(e.target);
  };

  render() {
    return (
      <Card title="Card title">
        <TodoList />
      </Card>
    );
  }
}
