import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { Input, FormBtn, TextArea } from "../../components/SearchForm";
import "./class.css";

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
    avgUsage: 0,

    reviewActive: 1,
    formActive: 0
  };

  // Function for calculating the average of an array
  calcAvg = array => {
    let sum = 0;
    array.forEach(number => {
      sum += number;
    });

    return (sum / array.length).toFixed(2);
  };

  linkStylng = value => {
    if (value === 1) {
      return "#FFC904";
    } else {
      return "#fff";
    }
  };

  reviewActive = () => {
    this.setState({ reviewActive: 1, formActive: 0 });
    this.loadReviews();
  };

  formActive = () => {
    this.setState({ formActive: 1, reviewActive: 0 });
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
      .then(res =>
        this.setState({
          course: res.data,
          avgGrade: this.calcAvg(res.data.grade),
          avgPurchase: this.calcAvg(res.data.purchase),
          avgUsage: this.calcAvg(res.data.use)
        })
      )
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
    }).then(this.loadClass());
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
        <div className="jumbotron text-center" id="class-jumbo">
          <h2 className="display-4">
            {this.state.course.major} {this.state.course.courseNumber}
          </h2>
          <p className="lead">{this.state.course.className}</p>
          <hr className="my-4" />
          <h3>Avg Grade: {this.state.avgGrade}%</h3>
          <h3>Purchase Rate: {this.state.avgPurchase * 100}%</h3>
          <h3>Usage Time: {this.state.avgUsage} hours per week</h3>
        </div>
        <div className="class-tabs">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a
                class="nav-link class-review-btn"
                onClick={this.reviewActive}
                style={{ color: this.linkStylng(this.state.reviewActive) }}
              >
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link class-form-btn"
                onClick={this.formActive}
                style={{ color: this.linkStylng(this.state.formActive) }}
              >
                Add Review
              </a>
            </li>
          </ul>
        </div>
        {this.state.reviewActive === 1 ? (
          this.state.reviews.length ? (
            <Container fluid>
              {this.state.reviews.map(review => (
                <div className="card student-review-card" key={review._id}>
                  <div className='review-info'>
                    <h2 className="student-info">{review.name}</h2>
                    <h2 className="student-info">
                      Purchased: {review.purchase}
                    </h2>

                    <h2 className="student-info">Grade: {review.grade}</h2>

                    <h2 className="student-info">usage: {review.usage}</h2>
                  </div>
                  <div className='summary-section'>
                    <h2 className='summary-title'>Review</h2>
                    <p className='summary'>{review.summary}</p>
                  </div>
                  
                </div>
              ))}
            </Container>
          ) : (
            <div className="no-reviews-container">
              <h3 className="no-reviews">No reviews yet!</h3>
            </div>
          )
        ) : (
          <Row>
            <Col size="md-12">
              <form className="class-review-form">
                <label className="class-form-label">First Name</label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                />
                <label className="class-form-label">
                  Email (Not displayed in review)
                </label>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email@knights.ucf.edu"
                />
                <label className="class-form-label">Grade</label>
                <Input
                  value={this.state.grade}
                  onChange={this.handleInputChange}
                  name="grade"
                  type="number"
                />
                <label className="class-form-label">
                  Did you Purchase the textbook?(1 for Yes, 0 for No)
                </label>
                <Input
                  value={this.state.purchase}
                  onChange={this.handleInputChange}
                  name="purchase"
                  type="number"
                />
                <label className="class-form-label">
                  About how many hours a week did you use the textbook? (if no
                  purchase put 0)
                </label>
                <Input
                  value={this.state.usage}
                  onChange={this.handleInputChange}
                  name="usage"
                  type="number"
                />
                <label className="class-form-label">Overall Thoughts</label>
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
        )}
      </Container>
    );
  }
}

export default Class;
