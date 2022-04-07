
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
import { createDrawerNavigator } from "@react-navigation/drawer";


// Import Screens
import HomeScreen from "../Screens/HomeScreen";

// Import Navigators


// Set Default Navigator Options
const defaultRootNavOpt


// Create Navigators
const RootDrawer = createDrawerNavigator();

// Configure Navigators
const RootDrawerNavigator = () => {
    return (
        <RootDrawer.Navigator>
            <RootDrawer.Screen name='Home'
                component={HomeScreen}
                option={{}}    
            />
        </RootDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default RootDrawerNavigator;


