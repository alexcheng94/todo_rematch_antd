import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import TodoContainer from "./TodoContainer";
const { Content } = Layout;

const styles = {
  content: {
    minHeight: "100vh",
    padding: '100px 0'
  }
};
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content style={styles.content}>
            <Row type="flex" align="middle" justify="center">
              <Col span={18}>
                <TodoContainer />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
