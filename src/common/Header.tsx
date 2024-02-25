import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
        <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor:'#fff'
      }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 20,
          color: '#14919b',
          marginLeft: 20,
        }}>
        ClothingApp
      </Text>

      <TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 30,
        }}>
        <Text style={{color:'#14919b'}}>Mode</Text>
      </TouchableOpacity>

    </View>
          
    </View>
    

  );
};

export default Header;
