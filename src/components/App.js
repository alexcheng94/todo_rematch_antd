import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import MyCard from "./Card";
const { Header, Content } = Layout;

const styles = {
  content: {
    height: "100vh",
    marginTop: "2em"
  }
};
class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Layout>
          <Header />
          <Content style={styles.content}>
            <Row type="flex" align="middle" justify="center">
              <Col span={18}>
                <MyCard />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
