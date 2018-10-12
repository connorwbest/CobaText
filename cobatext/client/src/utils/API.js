import axios from "axios";

export default {
    getClasses: function() {
        return axios.get('/search/all');
    },
    getClass: function(number) {
        return axios.get('/search/' + number)
    },
    getClassPage: function(id) {
        return axios.get('/search/class/' + id)
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