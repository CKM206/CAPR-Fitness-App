import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';

const ExerciseCreateScreen= () => {
    const [name, setName] = useState('');
    console.log(name)
    return ( 
        <View style={styles.screen}>
            <Input 
                label='Name:' 
                placeholder='Bench Press'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            
            <Text>Exercise Type</Text>
            <Button icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  } title='Strength' type='clear'></Button>
            <Text>Muscles Worked</Text>
            <Text>Equipment</Text>
            <Text>Force</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
    }
});

export default ExerciseCreateScreen;