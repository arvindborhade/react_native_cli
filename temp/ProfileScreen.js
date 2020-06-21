import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
  
  const ProfileScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button 
            title="Go to Home screen"
            onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  };
  
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});