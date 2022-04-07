
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
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import ExerciseListScreen from "../Screens/Exercises/ExerciseListScreen";
import ExerciseDetailScreen from "../Screens/Exercises/ExerciseDetailScreen";
import ExerciseCreateScreen from "../Screens/Exercises/ExerciseCreateScreen";

// Import Navigators


// Set Default Navigator Options
const defaultExercisesStackScreenOptions = {
    // cardStyle: {
    //     backgroundColor: '#FFFFFF'
    // },
};


// Create Navigators
const ExercisesStack = createStackNavigator();

// Configure Navigators
const ExercisesStackNavigator = () => {
    return (
        <ExercisesStack.Navigator
            initialRouteName="ExerciseList"
            screenOptions={defaultMainDrawerScreenOptions}
        >
        <ExercisesStack.Screen name='ExerciseList'
                component={ExerciseListScreen}
                option={{}}    
        />
        <ExercisesStack.Screen name='ExerciseDetail'
                component={ExerciseDetailScreen}
                option={{}}    
        />
        <ExercisesStack.Screen name='ExerciseCreate'
                component={ExerciseCreateScreen}
                option={{}}    
        />
        </ExercisesStack.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default ExercisesStackNavigator;



