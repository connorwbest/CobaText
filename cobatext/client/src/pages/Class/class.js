import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Container, Row, Col } from "../../components/Grid";
import { Input, FormBtn, TextArea } from "../../components/SearchForm";

class Class extends Component {
  state = {
    course: {},
    reviews: [],

    name: "",
    email: "",
    grade: 0,
    purchase: 1,
    usage: 0,
    summary: "",

    avgGrade: 0,
    avgPurchase: 0,
    avgUsage: 0
  };

  // Function for calculating the average of an array
  calcAvg = array => {
    let sum = 0;
    array.forEach(number => {
      sum += number;
    });

    return (sum / array.length).toFixed(2);
  };

  // Captures input changes on the review form
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Grabs the relevant information for the class clicked on search page
  loadClass = () => {
    API.getClassPage(this.props.match.params.id)
      .then(res => this.setState({ course: res.data, avgGrade: this.calcAvg(res.data.grade), avgPurchase: this.calcAvg(res.data.purchase), avgUsage: this.calcAvg(res.data.use) }))
      .catch(err => console.log(err));
  };

  // Loads all the reviews for this class using the class property in the reviews
  loadReviews = () => {
    API.getReviews(this.props.match.params.id)
      .then(res => this.setState({ reviews: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  };

  // Creates a new review which is triggered when the submit button is clicked, also updates class arrays for calculations
  createReview = event => {
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
      .then(this.updateClass())
      .then(this.resetState())
      .then(this.loadReviews())
      .catch(err => console.log(err));
  };

  // This is what updates our class info for calculations, run when a review is created
  updateClass = () => {
    API.updateClass({
      class: this.state.course._id,
      grade: this.state.grade,
      purchase: this.state.purchase,
      usage: this.state.usage
    })
    .then(this.loadClass())
  };

  // Reset the state and therefore form so a new review can be entered
  resetState = () => {
    this.setState({
      name: "",
      email: "",
      grade: 0,
      purchase: 1,
      usage: 0,
      summary: ""
    });
  };

  // Loads the class and its review on page load
  componentDidMount() {
    this.loadClass();
    this.loadReviews();
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
          <h3>Avg Grade: {this.state.avgGrade}%</h3>
          <h3>Purchase Rate: {this.state.avgPurchase * 100}%</h3>
          <h3>Usage Time: {this.state.avgUsage} hours per week</h3>
        </div>
        {this.state.reviews.length ? (
          <Container>
            {this.state.reviews.map(review => (
              <div className="card" key={review._id}>
                <div className="card-body">
                  Name: {review.name}
                  Purchased: {review.purchase}
                  Grade: {review.grade}
                  usage: {review.usage}
                  Summary: {review.summary}
                </div>
              </div>
            ))}
          </Container>
        ) : (
          <h3>No Results to Display</h3>
        )}
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
              <label>Did you Purchase the textbook?(1 for Yes, 0 for No)</label>
              <Input
                value={this.state.purchase}
                onChange={this.handleInputChange}
                name="purchase"
                type="number"
              />
              <label>
                About how many hours a week did you use the textbook? (if no
                purchase put 0)
              </label>
              <Input
                value={this.state.usage}
                onChange={this.handleInputChange}
                name="usage"
                type="number"
              />
              <label>Overall Thoughts</label>
              <TextArea
                value={this.state.summary}
                onChange={this.handleInputChange}
                name="summary"
                rows="5"
              />
              <FormBtn type="submit" onClick={this.createReview}>
                Sumbit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Class;
