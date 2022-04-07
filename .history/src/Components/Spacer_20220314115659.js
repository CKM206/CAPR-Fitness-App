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