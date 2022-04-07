/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: Spacer.js
 *  Description: Provides a custom spacing element for use in other screens and components
 */

// Imports | React +
import React from 'react';
import { StyleSheet, View } from 'react-native';


// Render this on screen - Pass children as Props so that Components wrapped inside will function normally 
const Spacer = ({ children }) => {
    return ( 
        <View style={styles.spacer}>
            { children }
        </View>
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    spacer: {
        marginVertical: 10,
        marginHorizontal: 10,
    }
});

// Export the SignupScreen Component for use in other files
export default Spacer;