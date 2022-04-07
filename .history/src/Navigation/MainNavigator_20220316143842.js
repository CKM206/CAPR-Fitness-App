
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
import SplashScreen from "../Screens/SplashScreen";
import ExerciseCreateScreen from '../Screens/Exercises/ExerciseCreateScreen';

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
const HomeStack = createStackNavigator();
const ExerciseModal = createStackNavigator();

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

const ExercisesModalNavigator = () => {
    return (
        <ExerciseModal.Navigator mode='modal'>
            <ExerciseModal.Screen name='ExerciseCreate' 
                component={ExerciseCreateScreen} 
                options={{ headerShown: false}}/>
        </ExerciseModal.Navigator>
    );
}


const MainDrawerNavigator = () => {
    return (
        <MainDrawer.Navigator
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
                component={ExercisesStackNavigator}
                options={{
                    title: 'Exercises',
                    
                }}    
            />
            <MainDrawer.Screen name='ExerciseModal'
                component={ExercisesModalNavigator}
                options={{}}    
            />
        </MainDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default MainDrawerNavigator;



