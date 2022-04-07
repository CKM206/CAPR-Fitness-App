
/**
 *  Author:   Calvin May
 *  
 *  Date:     03/13/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: RootNavigator.js
 *  Description: This file is responsible for providing the root navigation options to the 
 *              application.
 */

// Import Required Navigation Methods
import { createStackNavigator } from "@react-navigation/stack";


// Import Screens

// Import Navigators
import AuthStackNavigator from "./AuthNavigatior";
import MainDrawerNavigator from "./MainNavigator";


// Set Default Navigator Options
const defaultRootStackScreenOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
};


// Create Navigators
const RootStack = createStackNavigator();

// Configure Navigators
const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
        screenOptions={defaultRootStackScreenOptions}>
            <RootStack.Screen name='Auth'
                component={AuthStackNavigator}
                option={{}}    
            />
            <RootStack.Screen name='Main'
                component={MainDrawerNavigator}
                option={{}}    
            />
        </RootStack.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default RootStackNavigator;


