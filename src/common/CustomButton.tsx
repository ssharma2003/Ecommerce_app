import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}:{title: string, onPress:any} ) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}
        onPress={onPress}>
        <Text style={{color:'white', fontSize:20}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 310,
        borderRadius: 7,
        backgroundColor: 'black',
        padding: 20,
        marginTop: 30,
      },
})