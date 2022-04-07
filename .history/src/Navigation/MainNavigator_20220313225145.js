
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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'ExerciseList':
      return 'Exercises';
  }
};


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
const HomeStack = createStackNavigator();

// Configure Navigators

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={defaultMainDrawerScreenOptions}
        >
            <HomeStack.Screen name='Home' component={HomeScreen} />
        </HomeStack.Navigator>
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
                options={({ route }) => ({
                    title: getHeaderTitle(route),
                  })} 
            />
        </MainDrawer.Navigator>
    );
}

// Export so that other files can reach this Navigator
export default MainDrawerNavigator;



