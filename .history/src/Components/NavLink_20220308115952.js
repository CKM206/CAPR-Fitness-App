import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';  // Because this will be a child element of a 
                                                    //-screen component that is rendered by react 
                                                    //-navigation, we  can ensure our component
                                                    //-has direct access to the parents navigation
                                                    //-props

const NavLink = ({ navigation, linkText, routeName }) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
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

// Wrap the Component with withNavigation
export default withNavigation(NavLink);