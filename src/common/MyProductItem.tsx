import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { addToWishlist } from '../redux/actions/Actions';

interface MyProductItemProps {
    item: any; // Replace 'any' with the actual type of 'item'
    onAddToCart: (item: any) => void;
    onAddToWishlist: (item: any) => void;
}


const MyProductItem = ({ item, onAddToCart,onAddToWishlist }: MyProductItemProps) => {
    return (
        <View style={{ width: 200, height: 250, borderRadius: 10, margin: 15, elevation: 3, backgroundColor:'white' }}>
            <Image source={item.image} style={{width:'100%', height:'80%',borderTopLeftRadius:10, borderTopRightRadius:10 }} />
            
            <View 
            style={{flex:1, 
            flexDirection:'row',
            alignItems:'stretch', 
            justifyContent:'space-between' 
            }}>
            <Text 
            style={{color:'#0b6477', 
            marginLeft:10,
            marginTop:5
            }}> 
            {item.name}
            </Text>
            <Text 
            style={{color:'#14919b', 
            marginRight:15,
            marginTop:5}}>
                Rs {item.price}
            </Text>    
            </View>
            <TouchableOpacity style={{marginRight:10, marginBottom:5, alignItems:'center',}}
            onPress={
                ()=>{
                    onAddToCart(item);
                }
            }> 
                <Text 
                style={{color:'#80ed99', 
                fontWeight:'bold', 
                padding:1, 
                borderRadius:10, 
                borderWidth:1, 
                borderColor:'#80ed99'
                }}> Add to cart </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={{width:35, 
                height: 35, 
                backgroundColor:'white', 
                borderRadius:20, 
                elevation:5, 
                position:'absolute', 
                right:5, 
                top:5 
            }} 
            onPress={() => {
                onAddToWishlist(item);
            }}>
                <Image 
                source={require('../images/heart.png')} 
                style={{ margin:5, width:25, height:25}} 
                />
            </TouchableOpacity>
        </View>
    )
}

export default MyProductItem

const styles = StyleSheet.create({})