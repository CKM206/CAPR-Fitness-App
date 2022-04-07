/**
 *  Author:   Calvin May
 *  
 *  Date:     03/14/2022
 *  Purpose:  Built as apart of my CAPR Fitness App
 *  Document: HomeScreen.js
 *  Description: Provides the landing page for Users after Signin. This is the Home page
 *              where the User can choose some activities to perform using the App
 */

// Imports | React +
import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Spacer from '../Components/Spacer';
import { Context } from '../Contexts/authContext';
import SignoutButton from '../Components/SignoutButton';

const HomeScreen= () => {
    const { signout, state } = useContext(Context);

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