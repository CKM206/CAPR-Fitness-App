
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
import { createStackNavigator } from "@react-navigation/stack";


// Import Screens
import HomeScreen from "../Screens/HomeScreen";
import ExerciseListScreen from "../Screens/Exercises/ExerciseListScreen";

// Import Navigators
import ExercisesStackNavigator from "./ExercisesNavigator";

// Set Default Navigator Options
const defaultMainDrawerScreenOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
};


// Create Navigators
const MainDrawer = createDrawerNavigator();
const MainStack = createStackNavigator();

// Configure Navigators

const MainStackNavigator () = {
    return (
        <MainStack.Navigator>
        </MainStack.Navigator>
    );
}


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
            <MainDrawer.Screen name='ExercisesStack'
                component={ExercisesStackNavigator}
                option={{}}    
            />
        </MainDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default MainDrawerNavigator;



