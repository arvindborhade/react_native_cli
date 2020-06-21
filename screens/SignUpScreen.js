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

import DrawerNavigate from './DrawerNavigate';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email:'',
    password:'',
    confirm_password: '',
    check_textInputChange:false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
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
  const handleConfirmPasswordChange = (val) => {
    setData ({
      ...data,
      confirm_password: val
    });
  }
  const UpdateSecureTextEntry = () => {
    setData({
      ...data,
    secureTextEntry: !data.secureTextEntry
    });
  }

  const UpdateConfirmSecureTextEntry = () => {
    setData({
      ...data,
    confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View        
        animation="fadeInUpBig"
        style={styles.footer}>
          <View styles={styles.footer}>
            <View style={styles.action}>
                <FontAwesome 
                name="user"
                color="black"
                size={20}
                style={styles.iconStyle}
                />
                <TextInput
                  placeholder="Your Email"
                  placeholderTextColor={'black'}
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View
                animation="bounceIn">
                  <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  style={styles.iconStyle}
                  />
                </Animatable.View>
              :null}
            </View>
            <View style={styles.action}>
              <FontAwesome 
              name="lock"
              color="black"
              style={styles.iconStyle}
              size={20} />
              
              <TextInput
                placeholder="Your Password"
                placeholderTextColor={'black'}
                style={styles.textInput}
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val)=> handlePasswordChange(val)}
              />
              
              <TouchableOpacity
              onPress={UpdateSecureTextEntry}>
                {data.secureTextEntry ? 
                <Feather
                name="eye-off"
                color="gray"
                size={20}
                style={styles.iconStyle}
                />
                :
                <Feather
                name="eye"
                color="green"
                size={20}
                style={styles.iconStyle}
                />
              }
              </TouchableOpacity>
            </View>  
            <View style={styles.action}>
              <FontAwesome 
              name="lock"
              color="black"
              style={styles.iconStyle}
              size={20} />
              
              <TextInput
                placeholder="Confirm Your Password"
                placeholderTextColor={'black'}
                style={styles.textInput}
                autoCapitalize= "none"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                onChangeText={(val)=> handleConfirmPasswordChange(val)}
              />
              
              <TouchableOpacity
              onPress={UpdateConfirmSecureTextEntry}>
                {data.confirm_secureTextEntry ? 
                <Feather
                name="eye-off"
                color="gray"
                size={20}
                style={styles.iconStyle}
                />
                :
                <Feather
                name="eye"
                color="green"
                size={20}
                style={styles.iconStyle}
                />
              }
              </TouchableOpacity>
            </View>
              
            <View style={styles.button}>
              <LinearGradient
                colors={['#31d7cc', '#009387']}
                style={styles.signIn}>
                
                  <Text style={styles.textSign}>Sign Up</Text>
                
              </LinearGradient>
              <TouchableOpacity
              onPress={()=>navigation.goBack()}
              style={(styles.signIn,{
                borderColor:'#009387',
                marginTop:10,
                borderWidth:1,
                width:'100%',
                height:50,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:10

              })}>
                <Text style={[styles.textSign,{
                  color:'#009387',fontFamily:'Poppins-Light',
                }]}>Sign In</Text>
              </TouchableOpacity>              
            </View>
          </View>
        </Animatable.View> 
      </View>
      
    )
  }
export default SignUpScreen;

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
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50
  },
  footer:{
    flex:3,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30
  },
  text_header:{
    color:'#ffffff',
    fontSize:30,
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
    marginTop:30
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