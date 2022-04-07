import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Spacer from '../Components/Spacer';
import { Context } from '../contexts/AuthContext';
const HomeScreen= () => {

    const { signout } = useContext(Context);
    return ( 
        <View>
            <Text>I am the Home Screen</Text>
            <Spacer>
                <Button title='Sign Out' onPress={signout}/>
            </Spacer>
        </View>
    );
};


const styles = StyleSheet.create({
    
});

export default HomeScreen;