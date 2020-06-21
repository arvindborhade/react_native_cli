import React from 'react';
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Button,
  Card
} from 'react-native-paper';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
  
} from 'react-native';
  
  const HomeScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>LAN No. : GS001BL0271761</Text>
        <View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,marginTop:-50}}>
          <Card style={{flex:1}}>
            <Card.Content>
              <Title>Loan Amount</Title>
              <Paragraph>56,00,000/-</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{flex:1}}>
            <Card.Content>
              <Title>Amount Paid</Title>
              <Paragraph>12,00,000/-</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{flexDirection:"row",paddingLeft:20,paddingRight:20}}>
          <Card style={{flex:1}}>
            <Card.Content>
              <Title>Next EMI Due</Title>
              <Paragraph>22/6/2020</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{flex:1}}>
            <Card.Content>
              <Title>Amount</Title>
              <Paragraph>56,000/-</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,paddingTop:10}}>
          <Card style={{flex:1}}>
            <Card.Content>
              <Title>Next EMI Due</Title>
              <Paragraph>22/6/2020</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{flex:1}}>
            <Card.Content>
              <Title>Amount</Title>
              <Paragraph>56,000/-</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{padding:20,flex:1}}>
          <Button
            icon="send"
            mode="contained"
            
          >
            Sign me up
          </Button> 
        </View>
            
      </View>
    );
  };
  
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    heading: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: "bold",
      color:'white',
      backgroundColor: '#009387',
      height:120,
      padding: 20
    },
    headingText: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: "bold",
      color:'#000051'
    }
});


  