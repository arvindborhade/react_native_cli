import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
  
  const ExploreScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text>Explore Screen</Text>
        <Button 
            title="Go to Home screen"
            onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  };
  
export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


  