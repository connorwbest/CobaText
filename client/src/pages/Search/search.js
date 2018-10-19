import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../../components/SearchForm";
import { Container, Row, Col } from "../../components/Grid";
import { Class, ClassBody } from "../../components/classCard";
import API from "../../utils/API";
import "./search.css";
import NoResults from "./black-scribble-png-5.png";

class Courses extends Component {
  state = {
    courses: [],
    results: [],
    major: "",
    courseNumber: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

   // Function for calculating the average of an array
   calcAvg = array => {
    let sum = 0;
    array.forEach(number => {
      sum += number;
    });

    return (sum / array.length).toFixed(2);
  };

  loadClasses = event => {
    event.preventDefault();
    API.getClasses({})
      .then(res => this.setState({ courses: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  };

  loadClass = event => {
    event.preventDefault();
    if (!this.state.courseNumber) {
      API.getByMajor(this.state.major).then(res =>
        this.setState({ courses: res.data })
      );
    } else {
      API.getClass(this.state.major, this.state.courseNumber)
        .then(res => this.setState({ courses: res.data }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-react-link" to="/">
                <a className="nav-link" href="#firstPage">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#secondPage">
                Search
              </a>
            </li>
          </ul>
        </nav>
        <Row>
          <Col size="md-12">
            <div className="jumbotron" id="search-jumbo">
              <form className="searchForm">
                <label className="search-label">Major</label>
                <Input
                  value={this.state.major}
                  onChange={this.handleInputChange}
                  name="major"
                  placeholder="Mar"
                />
                <label className="search-label">Course Number</label>
                <Input
                  value={this.state.courseNumber}
                  onChange={this.handleInputChange}
                  name="courseNumber"
                  placeholder="3203"
                />
                <FormBtn onClick={this.loadClass} disabled={!this.state.major}>Search</FormBtn>
              </form>
            </div>
          </Col>
        </Row>
        {this.state.courses.length ? (
          <div className="results-container">
            <div className="search-title">
              <h3 className="search-title-text">Search Results</h3>
            </div>
            <div className="search-results">
              {this.state.courses.map(course => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/search/class/" + course._id}
                >
                  <Class key={course._id}>
                    <ClassBody>
                      <h5 className="card-title">
                        {course.major} {course.courseNumber}
                        <br />
                        {course.className}
                        <br />
                        {course.professor}
                      </h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Avg Grade: {this.calcAvg(course.grade)}%</li>
                        <li className="list-group-item">Avg Cost: ${this.calcAvg(course.cost)}</li>
                        <li className="list-group-item">Avg Usage: {this.calcAvg(course.use)} hr/week</li>
                      </ul>
                    </ClassBody>
                  </Class>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="search-none">
            <div className="search-title">
              <h3 className="search-title-text">Search Results</h3>
            </div>
            <div className="no-results-container">
              <img
                className="no-results-img"
                src={NoResults}
                alt="a graphic that says no results"
              />
              <h3 className="no-results">No Results to Display</h3>
            </div>
          </div>
        )}
      </Container>
    );
  }
}

export default Courses;
