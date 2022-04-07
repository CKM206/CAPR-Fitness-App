
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
import HomeScreen from "../Screens/HomeScreen";

// Import Navigators


// Set Default Navigator Options
//const defaultRootNavOpt


// Create Navigators
const RootStack = createStackNavigator();

// Configure Navigators
const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'transparent',
                borderWidth: 0,
                elevation: 0,
            }
        }}>
            <RootStack.Screen name='Home'
                component={HomeScreen}
                option={{}}    
            />
        </RootStack.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default RootStackNavigator;


