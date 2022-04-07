
/**
 *  Author:   Calvin May
 *  
 *  Date:     03/13/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: RootNavigator.js
 *  Description: This file is responsible for providing the Main-App navigation options to the 
 *              application.
 */

// Imports | Required Navigation Methods
import { createStackNavigator } from "@react-navigation/stack";

// Imports | Screens
import ExerciseListScreen from "../Screens/Exercises/ExerciseListScreen";
import ExerciseDetailScreen from "../Screens/Exercises/ExerciseDetailScreen";
import ExerciseCreateScreen from "../Screens/Exercises/ExerciseCreateScreen";
import DynamicHeaderButton from "../Components/DynamicHeaderButton";

// Imports | 3rd Party
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Set Default Navigator Options
const defaultExercisesStackScreenOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
};

const exerciseListScreenOptions = {
    
};


// Create Navigators
const ExercisesStack = createStackNavigator();

// Configure Navigators
const ExercisesStackNavigator = () => {
    return (
        <ExercisesStack.Navigator
            initialRouteName="ExerciseList"
            screenOptions={({ navigation }) => ({
                title: 'Exercises',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={DynamicHeaderButton}>
            <Item
                title='Create Exercise'
                iconName={'ios-add'}
                onPress={() => navigation.navigate('ExerciseCreate')}
            />
        </HeaderButtons>
    ),
            })}
        >
        <ExercisesStack.Screen name='ExerciseList'
                component={ExerciseListScreen}
                options={exerciseListScreenOptions}    
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



