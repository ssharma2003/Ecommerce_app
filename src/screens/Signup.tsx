import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextIp from '../common/CustomTextIp';
import CustomButton from '../common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}:{navigation:any}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [badcpassword, setbadcpassword] = useState(false);
  const [bademail, setbademail] = useState(false);
  const [badpassword, setbadpassword] = useState(false);
  const [badname, setbadname] = useState(false);
  const [badphone, setbadphone] = useState(false);

  const saveData =async()=>{
    if (!bademail && !badpassword && !badname && !badphone && !badcpassword) {
      
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('phone', phone);
      await AsyncStorage.setItem('password', password);
      console.log('Data saved');
      navigation.navigate('Login');
    }
  }

  const validate = () => {

    if (name == '') {
      setbadname(true);
    }else{
      setbadname(false);
      if (email == '') {
        setbademail(true);
      }else{
        setbademail(false);
        if (phone.length != 10) {
          setbadphone(true);
        }else{
          setbadphone(false);
          if (password == '') {
            setbadpassword(true);
          }else {
            setbadpassword(false);
            if (cpassword !== password) {
              setbadcpassword(true);
            }else{
              setbadcpassword(false);
              saveData();

            }
          }
        }
      }
    }
  }


  return (

    <ScrollView >
      <View style={styles.container}>
      <Image
        source={require('../images/playstore.png')}
        style={styles.image}
        borderRadius={60}
      />
      <Text style={styles.Headtext}>SignUp</Text>
      {/* <Text style={styles.text}>Welcome to Login Screen</Text> */}
      
      <CustomTextIp
        placeholder="Name"
        value={name}
        onChangeText={(txt: React.SetStateAction<string>)=>{
          setname(txt);
        }}
        icon={require('../images/user.png')}
        type={undefined}
        keyboardType={'default'}
      /> 
      {badname ? <Text style={{color: 'red'}}>Please enter name</Text> : null}

      <CustomTextIp
        placeholder="Enter email"
        value={email}
        onChangeText={(txt: React.SetStateAction<string>)=>{
          setemail(txt);
        }}
        icon={require('../images/mail.png')}
        type={undefined}
        keyboardType={'default'}
      />
      {bademail? <Text style={{color: 'red'}}>Please enter email</Text> : null}


      <CustomTextIp
        placeholder="Enter phone number"
        value={phone}
        onChangeText={(txt: React.SetStateAction<string>)=>{
          setphone(txt);
        }}
        icon={require('../images/iphone.png')}
        type={undefined}
        keyboardType={'number-pad'}
      />
      {badphone ? <Text style={{color: 'red'}}>Please enter valid phone number</Text> : null}

      <CustomTextIp
        placeholder="Enter password"
        value={password}
        onChangeText={(txt: React.SetStateAction<string>)=>{
          setpassword(txt);
        }}
        icon={require('../images/password.png')}
        type={'password'}
        keyboardType={'default'}
      />
      {badpassword ? <Text style={{color: 'red'}}>Please enter password</Text> : null}

      <CustomTextIp
        placeholder="Confirm password"
        value={cpassword}
        onChangeText={(txt: React.SetStateAction<string>)=>{
          setcpassword(txt);
        }}
        icon={require('../images/password.png')}
        type={'password'}
        keyboardType={'default'}
      />
      {badcpassword ? <Text style={{color: 'red'}}>Password does not match</Text> : null}

      <CustomButton
        title="SignUp"
        onPress={() => {
          validate();
        }}
      />
      <Text style={{marginTop:19, color:'grey', textDecorationLine:'underline', fontSize:17, marginBottom:20}} 
      onPress={()=>{
        navigation.navigate('Login');
      }}
      >
        Already have an account?
      </Text>
      
    </View>
    </ScrollView>
    
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'white'
      },
      image: {
        width: 100,
        height: 100,
        marginTop: 100,
      },
      Headtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
      },
      text: {
        fontSize: 20,
        color: 'grey',
        marginTop: 20,
        padding: 10,
        width: '80%',
        borderColor: 'grey',
        borderRadius: 7,
        borderWidth: 0.7,
      },
})