/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: HomeScreen.js
 *  Description: Provides the landing page for Users after Signin. This is the Home page
 *              which acts as a central Hub for the User.
 */

// Imports | React +
import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

// Imports | Components & Screens
import Spacer from '../Components/Spacer';

// Imports | Data Contexts
import { Context } from '../Contexts/AuthContext';


// Create the HomeScreen Component - Deconstruct required props
const HomeScreen= () => {
    // Manage 
    const { signOut } = useContext(Context);

    // Render this on the Screen
    return ( 
        <View>
            <Text>I am the Home Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={() => signOut()}/>
            </Spacer>
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the HomeScreen for use in other files
export default HomeScreen;