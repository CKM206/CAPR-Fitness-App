// Default dataContext to assist in any number of different contexts to be used in the app


import React, { useReducer } from "react";


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
