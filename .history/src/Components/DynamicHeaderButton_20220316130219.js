/**
 *  Author:   Calvin May
 *  
 *  Date:     03/16/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: DynamicHeaderButton.js
 *  Description: Used to create dynamic Header buttons on different screens
 */

// Imports | React +
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Imports | 3rd Party
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

// Imports | Components 

// Imports | Data Contexts


// Create the DynamicHeaderButton Component - Deconstruct required props
const DynamicHeaderButton = (props) => {
    
    // Render this on the Screen
    return ( 
        <HeaderButton {...props} 
            IconComponent={Ionicons} 
            iconSize={23} 
            color={Platform.OS === 'android' ? 'white' : 'white'} />
    );
};

// Contains Styling for this Component
const styles = StyleSheet.create({
    
});

// Export the DynamicHeaderButton for use in other files
export default DynamicHeaderButton;