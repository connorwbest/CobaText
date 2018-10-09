import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { Input, FormBtn } from "../../components/SearchForm";
import { Container, Row, Col } from "../../components/Grid";
import { Class} from "../../components/classCard";
import API from "../../utils/API";

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

  handleSearch = event => {
    event.preventDefault();
    API.getClasses()
      .then(res => this.setState({ courses: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
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
              <FormBtn onClick={this.handleSearch}>Search</FormBtn>
            </form>
          </Col>
        </Row>
        {this.state.courses.length ? (
          <Container>
            {this.state.courses.map(course => (
              <Class key={course._id}>
                <Link to={"/search/" + course._id}>
                  <div className="card-body">
                    <h5 className="card-title">
                      {course.major} {course.courseNumber} {course.className}
                    </h5>
                  </div>
                </Link>
              </Class>
            ))}
          </Container>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    );
  }
}

export default Courses;
