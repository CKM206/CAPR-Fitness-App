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

const Spacer = ({ children }) => {
    return ( 
        <View style={styles.spacer}>
            { children }
        </View>
    );
};


const styles = StyleSheet.create({
    spacer: {
        marginVertical: 10,
        marginHorizontal: 10,
    }
});

export default Spacer;