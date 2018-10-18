import React, { Component } from "react";
import { Card } from "antd";
import TodoList from "../containers/TodoList";

const styles = {
  card: {
  }
}
const tabList = [
  {
    key: "active",
    tab: "未完成"
  },
  {
    key: "completed",
    tab: "已完成"
  },
  {
    key: "all",
    tab: "全部"
  }
];

const contentListTodo = {
  all: <TodoList filter="all" />,
  completed: <TodoList filter="completed" />,
  active: <TodoList filter="active" />
};

export default class TodoContainer extends Component {
  state = {
    tabKey: "active"
  };

  handleTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div style={styles.card}>
        <Card
          tabList={tabList}
          activeTabKey={this.state.tabKey}
          onTabChange={key => {
            this.handleTabChange(key, "tabKey");
          }}
        >
          {contentListTodo[this.state.tabKey]}
        </Card>
      </div>
    );
  }
}
