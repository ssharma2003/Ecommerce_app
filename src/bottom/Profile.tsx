import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const Profile=()=>{
  return(
    <View style={{flex:1}}> 
      <View style={{width:'100%',height:70, justifyContent:'space-between', alignItems:'center',flexDirection: 'row',}}>
        <Text style={{color:'#14919b', fontWeight:'600', fontSize:20,marginLeft:5}}> Profile</Text>
        <TouchableOpacity style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={require('../images/settings.png')} style={{width: 25, height: 25}} />
        </TouchableOpacity>
      </View>

      <Image source={require('../images/user.png')} style={{width: 90, height: 90, borderRadius: 75, alignSelf: 'center', marginTop: 20}} />
    </View>
  )
}