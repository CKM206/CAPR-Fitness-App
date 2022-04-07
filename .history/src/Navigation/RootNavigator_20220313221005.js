
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
import ExerciseListScreen from "../Screens/Exercises/ExerciseListScreen";

// Import Navigators


// Set Default Navigator Options
const defaultMainDrawerScreenOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
};


// Create Navigators
const MainDrawer = createDrawerNavigator();

// Configure Navigators
const MainDrawerNavigator = () => {
    return (
        <MainDrawer.Navigator
            initialRouteName="Home"
            screenOptions={defaultMainDrawerScreenOptions}
        >
            <MainDrawer.Screen name='Home'
                component={HomeScreen}
                option={{}}    
            />
            <MainDrawer.Screen name='ExerciseList'
                component={ExerciseListScreen}
                option={{}}    
            />
        </MainDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default MainDrawerNavigator;



