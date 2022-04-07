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
import { Context } from '../Contexts/authContext';

// Create the HomeScreen Component, deconstruct needed props
const HomeScreen= () => {
    // Manage 
    const { signout } = useContext(Context);

    // Render this on the Screen
    return ( 
        <View>
            <Text>I am the Home Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={() => signout()}/>
            </Spacer>
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default HomeScreen;