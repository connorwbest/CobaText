import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Input, FormBtn } from "../../components/SearchForm";
import { Container, Row, Col } from "../../components/Grid";

class Courses extends Component {
  state = {
    courses: [],
    major: "",
    courseNumber: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <form>
              <label>Major</label>
              <Input
                value={this.state.major}
                onChange={this.handleInputChange}
                name="major"
              />
              <label>Course Number</label>
              <Input
                value={this.state.courseNumber}
                onChange={this.handleInputChange}
                name="courseNumber"
              />
              <FormBtn>Search</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Courses;
