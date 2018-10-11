import axios from "axios";

export default {
    getClasses: function() {
        return axios.get('/search/all');
    },
    findOneByNumber: function(number) {
        return axios.get('/search/course/', number)
    },
    getClass: function(id) {
        return axios.get('/search/' + id)
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