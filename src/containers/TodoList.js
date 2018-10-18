import React, { Component } from "react";
import { List, Checkbox, Input, Icon, Button } from "antd";
import { connect } from "react-redux";

const styles = {
  input: {
    marginTop: 10
  },
  editInput: {
    position: "absolute",
    maxWidth: "90%"
  }
};

class TodoList extends Component {
  state = {
    value: "",
    editId: null,
    editValue: ""
  };

  componentDidMount = () => {
    window.addEventListener("click", this.hideEditInput, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("click", this.hideEditInput, false);
  };

  handleNewChange = e => {
    this.setState({ value: e.target.value });
  };

  handleCreate = value => {
    if (value) {
      this.props.addTodo(value);
      this.setState({ value: "" });
    }
  };

  handleCheck = e => {
    const { id } = e.target.value;
    this.props.toggleTodo(id);
    this.props.logState();
  };

  handleDelete = id => () => {
    this.props.deleteTodo(id);
  };

  showEditInput = id => e => {
    e.stopPropagation();
    this.setState({ editId: id });
  };

  hideEditInput = () => {
    this.setState({ editId: null });
  };

  handleEditChange = e => {
    this.setState({ editValue: e.target.value });
  };

  handleEditSubmit = id => value => {
    this.props.editTodo(id, value);
    this.hideEditInput();
  };

  render() {
    const { Item } = List;
    const { Search } = Input;
    const { todos } = this.props;
    const { value, editId } = this.state;

    const filterFn =
      this.props.filter === "all"
        ? todo => todo
        : this.props.filter === "active"
          ? todo => todo.completed === false
          : todo => todo.completed === true;

    const filteredTodo = todos.filter(filterFn);

    return (
      <div>
        <List
          dataSource={filteredTodo}
          renderItem={item => (
            <Item>
              <div>
                <Checkbox
                  onChange={this.handleCheck}
                  value={item}
                  checked={item.completed}
                />
                {editId === item.id ? (
                  <Search
                    size="small"
                    defaultValue={item.content}
                    onClick={this.showEditInput(item.id)}
                    onChange={this.handleEditChange}
                    onSearch={this.handleEditSubmit(item.id)}
                    enterButton={<Icon type="edit" />}
                    style={styles.editInput}
                  />
                ) : (
                  <span onClick={this.showEditInput(item.id)}>
                    {item.content}
                  </span>
                )}
              </div>

              <Button
                shape="circle"
                size="small"
                onClick={this.handleDelete(item.id)}
              >
                <Icon type="delete" theme="filled" />
              </Button>
            </Item>
          )}
        />
        <Search
          style={styles.input}
          value={value}
          onChange={this.handleNewChange}
          onSearch={this.handleCreate}
          placeholder="Add a todo"
          enterButton={<Icon type="plus" />}
        />
      </div>
    );
  }
}

const mapState = state => ({
  todos: state.todos
});

const mapDispatch = dispatch => ({
  addTodo: dispatch.todos.add,
  toggleTodo: dispatch.todos.toggle,
  deleteTodo: dispatch.todos.delete,
  editTodo: dispatch.todos.edit,
  logState: dispatch.todos.logState
});

export default connect(
  mapState,
  mapDispatch
)(TodoList);
