import {Image, StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import CustomTextIp from '../common/CustomTextIp';
import CustomButton from '../common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: {navigation: any}) => {
  //const [modalVisible, setModalVisible] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [bademail, setbademail] = useState(false);
  const [badpassword, setbadpassword] = useState(false);

  const getData=async()=>{
    const memail = await AsyncStorage.getItem('email');
    const mpassword = await AsyncStorage.getItem('password');
    console.log(email);
    console.log(password);
    if (email === memail && mpassword === password) {
      navigation.navigate('Home');
    } else {
    
    }
  
  }
  const validate = () => {
    if (email == '') {
      setbademail(true);
    }
    else{
      setbademail(false);
      if (password == '') {
        setbadpassword(true);
      } else {
        setbadpassword(false);
        getData();
      }
    }

    

    if (!bademail && !badpassword) {
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground style={{width:'100%', height:'100%', position:'absolute',opacity:0.8 }} source={require('../images/back.jpg') }>
      <View style={styles.container}>
      <Image
        source={require('../images/playstore.png')}
        style={styles.image}
        borderRadius={60}
      />
      <Text style={styles.Headtext}>Login</Text>


      <CustomTextIp
        keyboardType={'default'}
        placeholder="Enter email"
        value={email}
        onChangeText={(text: React.SetStateAction<string>) => {
          setemail(text);
        }}
        icon={require('../images/mail.png')}
        type={undefined}
      />
      

      {bademail ? <Text style={{color: 'red'}}>Please enter email</Text> : null}
      
      <CustomTextIp
        keyboardType={'default'}
        placeholder="Enter password"
        value={password}
        onChangeText={(text: React.SetStateAction<string>) => {
          setpassword(text);
        }}
        icon={require('../images/password.png')}
        type={'password'}
      />
      
      {badpassword ? <Text style={{color: 'red'}}>Please enter password</Text> :null}
      
      <CustomButton
        title="Login"
        onPress={() => {
          validate();
        }}
      />

      <Text
        style={{
          textDecorationLine: 'underline',
          marginTop: 20,
          color: 'grey',
          fontSize: 17,
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create a new account?
      </Text>

    </View>

    </ImageBackground>
  );
}
    
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor:'rgba(255,255,255,0.6)'
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
    backgroundColor: 'white',
  },
});
