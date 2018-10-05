import axios from "axios";

export default {
    getClasses: function() {
        return axios.get('search/all');
    }
};