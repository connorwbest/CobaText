import axios from "axios";

export default {
    getClasses: function() {
        return axios.get('/search/all');
    },
    getClass: function(major, number) {
        return axios.get('/search/course/'+ major +'/' + number)
    },
    getByMajor: function(major) {
        return axios.get('/search/courses/all/' + major)
    },
    getClassPage: function(id) {
        return axios.get('/search/course/' + id)
    },
    createReview: function(review) {
        return axios.post('/search/reviews', review)
    },
    getReviews: function(id) {
        return axios.get('/search/reviews/' + id)
    },
    updateClass: function(data) {
        return axios.put('/search/reviews', data);
    }
};