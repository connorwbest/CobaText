import axios from "axios";

export default {
    getClasses: function() {
        return axios.get('/search/all');
    },

    getClass: function(id) {
        return axios.get('/search/' + id)
    },
    createReview: function(review) {
        return axios.post('/search/reviews', review)
    }
};