import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const CustomTextIp = ({ value, onChangeText, placeholder, icon, type, keyboardType}: { value: any, onChangeText: any, placeholder: any, icon: any, type: any, keyboardType: any }) => {

    return (
        <View style={styles.text}>
            <Image source={icon} style={styles.image}/>
            <TextInput 
            style={styles.textip} 
            placeholder={placeholder} 
            secureTextEntry={type ? true: false}
            onChangeText={txt=>{
                onChangeText(txt);
            }}
            value={value}
            keyboardType={keyboardType}
            />
        </View>
    )
}

export default CustomTextIp

const styles = StyleSheet.create({
    text:{
        fontSize: 10,
        color: 'black',
        marginTop:15,
        padding:10,
        width:'80%',
        borderColor: 'grey',
        borderRadius: 8,
        borderWidth:0.7,
        flexDirection:'row',
        
    },
    image:{
        marginTop: 7,
        width: 35,
        height:35,
    },
    textip:{
        color:'black',
        
    }
})