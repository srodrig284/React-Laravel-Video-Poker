// Include the axios package for performing HTTP requests (promise based alternative to request)
//let axios = require("axios");
import axios from 'axios';

// Helper functions for making API Calls
let helper = {

    getCredits: function(userID){
        return axios.get("/credits", {userid: userID});
    }
};

export default helper;