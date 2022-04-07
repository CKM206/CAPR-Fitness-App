import axios from "axios";

export default axios.create({
    baseURL: 'https://capr-fitness-app-api.herokuapp.com/'
});