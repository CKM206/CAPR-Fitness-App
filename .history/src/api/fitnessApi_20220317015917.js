/**
 *  Author:   Calvin May
 *  
 *  Date:     03/13/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: fitnessApi.js
 *  Description: Sets up axios within the application to assist in making API Requests to our custom
 *              Fitness App API
 */

// Imports | 3rd Party
import axios from "axios";  // Assists in API Requests
import AsyncStorage from '@react-native-async-storage/async-storage';

// BaseURL for API Requests
const instance =  axios.create({
    baseURL: 'http://localhost:3000/'
});

instance.interceptors.request.use(
    // This is run every time we make a request
    async (config) => {
        // attempt to retrieve the JWT Token
        const token = await AsyncStorage.getItem('token');

        // Check if the Token exists
        if (token) {
            // If so, modify the headers, adding the the Token to Authorization
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Return the updated config
        return config;
    },
    // Handles Issue Making the Request Ex/ No Internet
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;