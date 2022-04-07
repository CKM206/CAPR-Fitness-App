/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: SignupScreen.js
 *  Description: Provides the Screen Interface that allows the User to Sign up for an account! 
 *              Successful logins route the User to the Apps Main Navigation
 */

// Imports | 3rd Party
import axios from "axios";  // Assists in API Requests

// BaseURL for API Requests
export default axios.create({
    baseURL: 'https://capr-fitness-app-api.herokuapp.com/'
});