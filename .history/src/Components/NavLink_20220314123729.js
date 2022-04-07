import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import to Inject Navigation Function, See end of File for implementation

const NavLink = ({ linkText, routeName }) => {

     // Use the useNavigation Hook to get access to the Navigation Prop
     const navigation = useNavigation();

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