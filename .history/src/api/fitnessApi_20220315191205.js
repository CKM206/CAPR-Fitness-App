/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: fitnessApi.js
 *  Description: Sets up axios within the application to assist in making API Requests to our custom
 *              Fitness App API
 */

// Imports | 3rd Party
import axios from "axios";  // Assists in API Requests

// BaseURL for API Requests
export default axios.create({
    baseURL: 'https://capr-fitness-app-api.herokuapp.com/'
});