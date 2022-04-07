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
                <SignoutButton title="Sign Out" onSubmit={signout}/>
            </Spacer>
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default HomeScreen;