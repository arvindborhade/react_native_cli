import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
  
  const SupportScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Button 
            title="Click Here"
            onPress={() =>alert("clicked!")}
        />
      </View>
    );
  };
  
export default SupportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});