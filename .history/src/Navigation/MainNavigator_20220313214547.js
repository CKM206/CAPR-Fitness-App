
/**
 *  Author:   Calvin May
 *  
 *  Date:     03/13/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: RootNavigator.js
 *  Description: This file is responsible for providing the Main-App navigation options to the 
 *              application.
 */

// Import Required Navigation Methods
import { createDrawerNavigator } from "@react-navigation/drawer";


// Import Screens
import HomeScreen from "../Screens/HomeScreen";
import ExerciseCreateScreen from "../Screens/Exercises/ExerciseCreateScreen";

// Import Navigators


// Set Default Navigator Options
const defaultAuthStackScreenOptions = {
    
};


// Create Navigators
const MainDrawer = createDrawerNavigator();

// Configure Navigators
const MainDrawerNavigator = () => {
    return (
        <MainDrawer.Navigator
        screenOptions={defaultRootStackScreenOptions}>
            <MainDrawer.Screen name='SignIn'
                component={SignInScreen}
                option={{}}    
            />
            <MainDrawer.Screen name='Signup'
                component={SignupScreen}
                option={{}}    
            />
        </MainDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default MainDrawerNavigator;


