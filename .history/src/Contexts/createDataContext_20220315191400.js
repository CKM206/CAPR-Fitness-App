/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: createDataContext.js
 *  Description: Default Data Context to assist in any number of different Data Contexts/Providers to be used in the app
 */

// Imports | React +
import React, { useReducer } from "react";

// Export the Data Context, includes a Reducer for handling actions, actions, and default values
export default (reducer, actions, defaultValue) => {

    // Create the Context
    const Context = React.createContext();

    // Create the Helper provider component
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
            { children }
            </Context.Provider>
        );
    };

    //return { Context: Context, Provider: Provider };
    return { Context, Provider };   // Same as above

};
