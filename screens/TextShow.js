import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
  
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email:'',
    password:'',
    check_textInputChange:false,
    secureTextEntry: true
  });
  const textInputChange = (val) => {
    if(val.length != 0){
      setData({
        ...data,
        email: val,
        check_textInputChange:true
        });
      } else {
        setData({
          ...data,
          email: val,
          check_textInputChange: false
        });
      }
    }
  const handlePasswordChange = (val) => {
    setData ({
      ...data,
      password: val
    });
  }
  const UpdateSecureTextEntry = () => {
    setData({
      ...data,
    secureTextEntry: !data.secureTextEntry
    });
  }
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.text_header}>LAN No : CS001BL02271761</Text>
        </View>
        <View style={styles.footer}>
          
          <Text style={styles.text_footer}>Welcome</Text>
          <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
            />
        </View>
        
       
      </View>
      
    )
  }
export default SignInScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    fontFamily:'Poppins-Light',
    backgroundColor:'#009387'
  },

  iconStyle:{
    paddingTop:10,
    paddingBottom:10
  },

  header:{
    flex:1,
    justifyContent:'flex-start',
    paddingHorizontal:20,
    paddingBottom:100,
    marginTop: 20
  },
  
  footer:{
    flex:4,
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:30
  },
  text_header:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:20,
    fontFamily:'Poppins-Light'
  },
  textSign:{
    color:'white',
    fontWeight:'700',
    fontFamily:'Poppins-Light',
  },
  text_footer:{
    color:'#05375a',
    fontSize:18
  },
  action:{
    flexDirection:'row',
    marginTop:20,
    borderBottomWidth:2,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5
  },
  textInput:{
    flex:1,
    paddingLeft:30,
    color:'#05375a',
    fontFamily:'Poppins-Light',
    fontSize:18
    
  },
  button:{
    alignItems:'center',
    marginTop:50
  },
 
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  textPrivate:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20
  },
  color_textPrivate:{
    color:'gray'
  }
    

});