import React, { Component } from "react";
import { List, Checkbox, Input, Icon } from "antd";
import { connect } from "react-redux";

const styles = {
  input: {
    marginTop: 10
  }
};

class TodoList extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = value => {
    this.props.addTodo(value);
    this.setState({ value: "" });
  };
  render() {
    const { Item } = List;
    const { Search } = Input;
    const { todos } = this.props;
    const { value } = this.state;

    return (
      <div>
        <List
          dataSource={todos}
          renderItem={item => (
            <Item>
              <Checkbox onChange={this.handleCheck} value={item}>
                {item.content}
              </Checkbox>
            </Item>
          )}
        />
        <Search
          style={styles.input}
          value={value}
          onChange={this.handleChange}
          onSearch={this.handleSubmit}
          placeholder="input search text"
          enterButton={<Icon type="plus-circle" theme="outlined" />}
        />
      </div>
    );
  }
}

const mapState = state => ({
  todos: state.todos
});

const mapDispatch = dispatch => ({
  addTodo: dispatch.todos.add
});

export default connect(
  mapState,
  mapDispatch
)(TodoList);
