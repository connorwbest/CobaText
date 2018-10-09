import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Container, Row, Col } from "../../components/Grid";
import { Select, Input, FormBtn, TextArea } from "../../components/SearchForm";

class Class extends Component {
  state = {
    course: {},
    reviews: [],
    name: "",
    email: "",
    grade: 0,
    purchase: 1,
    usage: 0,
    summary: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.createReview({
        class: this.state.course._id,
        name: this.state.name,
        email: this.state.email,
        purchase: this.state.purchase,
        grade: this.state.grade,
        usage: this.state.usage,
        summary: this.state.summary

      })
        .then(console.log("submitted"))
        .catch(err => console.log(err));
  };

  componentDidMount() {
    API.getClass(this.props.match.params.id)
      .then(res => this.setState({ course: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Nav />
        <div className="jumbotron text-center">
          <h2 className="display-4">
            {this.state.course.major} {this.state.course.courseNumber}
          </h2>
          <p className="lead">{this.state.course.className}</p>
          <hr className="my-4" />
          <h3>Avg Grade: B+</h3>
          <h3>Purchase Rate: 46%</h3>
          <h3>Usage Time: Low</h3>
        </div>
        <Row>
          <Col size="md-12">
            <form>
              <label>First Name</label>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
              />
              <label>Email (Not displayed in review)</label>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email@knights.ucf.edu"
              />
              <label>Grade</label>
              <Input
                value={this.state.grade}
                onChange={this.handleInputChange}
                name="grade"
                type="number"
              />
              <label>Did you Purchase the textbook?</label>
              <Select
                value={this.state.purchase}
                onChange={this.handleInputChange}
                name="purchase"
                type="number"
              >
                  <option>1 (Yes)</option>
                  <option>0 (No)</option>
              </Select>
              <label>How often did you use the textbook (if no purchase select 0)</label>
              <Select
                value={this.state.usage}
                onChange={this.handleInputChange}
                name="usage"
                type="number"
              >
                  <option>0 </option>
                  <option>1(Never opened it)</option>
                  <option>2 </option>
                  <option>3 </option>
                  <option>4 </option>
                  <option>5(Few hours a week) </option>
                  <option>6 </option>
                  <option>7 </option>
                  <option>8 </option>
                  <option>9 </option>
                  <option>10(All the time) </option>
              </Select>
              <label>Overall Thoughts</label>
              <TextArea 
                value={this.state.summary}
                onChange={this.handleInputChange}
                name="summary"
                rows="5"
              />
              <FormBtn type="submit" onClick={this.handleFormSubmit}>Sumbit</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Class;
