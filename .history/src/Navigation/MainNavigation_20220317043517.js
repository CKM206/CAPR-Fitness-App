
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
import SplashScreen from "../Screens/SplashScreen";

// Import Navigators
import ExerciseStackNavigator from './ExerciseNavigation';
import WorkoutStackNavigator from "./WorkoutNavigation";

// Set Default Navigator Options
const defaultMainDrawerScreenOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
};


// Create Navigators
const MainDrawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

// Configure Navigators

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={defaultMainDrawerScreenOptions}
        >
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='Splash' component={SplashScreen} />
        </HomeStack.Navigator>
    );
};


const MainDrawerNavigator = () => {
    return (
        <MainDrawer.Navigator mode='modal'
            initialRouteName="HomeStack"
            screenOptions={defaultMainDrawerScreenOptions}
        >
            <MainDrawer.Screen name='HomeStack'
                component={HomeStackNavigator}
                options={{
                    title: 'Home',
                }}    
            />
            <MainDrawer.Screen name='ExercisesStack'
                component={ExerciseStackNavigator}
                options={{
                    title: 'Exercises',
                    
                }}    
            />
        </MainDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default MainDrawerNavigator;



