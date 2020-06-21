import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
  
  const BookmarkScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button 
            title="Click Here"
            onPress={() =>alert("clicked!")}
        />
      </View>
    );
  };
  
export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});