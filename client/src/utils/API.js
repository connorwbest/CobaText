import axios from "axios";

export default {
    getClasses: function() {
        return axios.get('/search/all');
    },
    getClass: function(major, number) {
        return axios.get('/api/search/course/'+ major +'/' + number)
    },
    getByMajor: function(major) {
        return axios.get('/api/search/courses/all/' + major)
    },
    getClassPage: function(id) {
        return axios.get('/api/search/course/' + id)
    },
    createReview: function(review) {
        return axios.post('/api/search/reviews', review)
    },
    getReviews: function(id) {
        return axios.get('/api/search/reviews/' + id)
    },
    updateClass: function(data) {
        return axios.put('/api/search/reviews', data);
    }
};