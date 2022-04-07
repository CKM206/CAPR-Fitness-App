
/**
 *  Author:   Calvin May
 *  
 *  Date:     03/16/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: WorkoutNavigation.js
 *  Description: This file is responsible for providing the workout screen navigation options to the 
 *              application.
 */

// Imports | Required Navigation Methods

// Imports | Required Navigation Methods
import { createStackNavigator } from "@react-navigation/stack";


// Imports | Screens
import WorkoutSelectionScreen from '../Screens/Workout/WorkoutSelectionScreen';
import WorkoutDetailScreen from '../Screens/Workout/WorkoutDetailScreen';
import WorkoutExerciseScreen from '../Screens/Workout/WorkoutExercisesScreen'
import WorkoutCompleteScreen from "../Screens/WorkoutCompleteScreen";

// Imports | 3rd Party
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Set Default Navigator Options
const defaultWorkoutStackScreenOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
};


// Create Navigators
const WorkoutStack = createStackNavigator();

// Configure Navigators
const WorkoutStackNavigator = () => {
    return (
        <WorkoutStack.Navigator
            initialRouteName="WorkoutSelection"
            screenOptions={defaultWorkoutStackScreenOptions}
        >
        <WorkoutStack.Screen name='WorkoutSelection'
                component={WorkoutSelectionScreen}
                options={() => ({
                    title: 'Workout',
                })
            }    
        />
        <WorkoutStack.Screen name='WorkoutDetail'
                component={WorkoutDetailScreen}      
                options={() => ({
                    title: 'Workout',
                })
            }      
        />
        <WorkoutStack.Screen name='WorkoutExercise'
                component={WorkoutExerciseScreen}
                options={() => ({
                    title: 'Add Exercise',
                    header: {
                        disabled
                    }
                })
            }       
        />
        <WorkoutStack.Screen name='WorkoutComplete'
                component={WorkoutCompleteScreen}
                options={() => ({
                    title: 'Finished!',
                    
                })
            }       
        />
        </WorkoutStack.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default WorkoutStackNavigator;