/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: NavLink.js
 *  Description: Custom Component for providing styled navigation links in other Screens or Components
 */

// Imports | React +
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Imports | 3rd Party
import { useNavigation } from '@react-navigation/native'; // Import to Inject Navigation Function, 


// Create the NavLink Component - Deconstruct the necessary Props
const NavLink = ({ linkText, routeName }) => {

     // Use the useNavigation Hook to get access to the Navigation Prop
     const navigation = useNavigation();

     // Render this on the Screen
    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text style={styles.link}>
                    {linkText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //flexWrap: 'wrap',
        alignSelf:'flex-start',
        flexDirection:'row',
        justifyContent:'flex-end',
        //borderWidth: 1, 
        marginLeft: 11,
          
    },
    link: {
        color: 'blue',      
    },  
});

export default NavLink;