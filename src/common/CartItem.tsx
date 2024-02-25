import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';

interface MyProductItemProps {
    item: any; // Replace 'any' with the actual type of 'item'
    onRemoveFromCart: (item: any) => void;
    isWishlist: any;
    onRemoveFromWishlist: (item: any) => void; // Add this line'
    onAddToCart: (item: any) => void;
    onAddWishlist: (item: any) => void; // Add this line
}

const CartItem = ({ item, onRemoveFromCart, isWishlist, onRemoveFromWishlist, onAddToCart, onAddWishlist }: MyProductItemProps) => {
    return (
        <View style={{ width: '92%', height: 250, borderRadius: 10, margin: 15, elevation: 3, backgroundColor:'white' }}>
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
            marginTop:15
            }}> 
            {item.name}
            </Text>
            <Text 
            style={{color:'#14919b', 
            marginRight:15,
            marginTop:15}}>
                Rs {item.price}
            </Text>   

            {
                isWishlist ? ( <TouchableOpacity style={{marginRight:10, marginTop:10, alignItems:'center',}}
                onPress={
                    ()=>{
                        onAddToCart(item);
                    }
                }> 
                    <Text 
                    style={{color:'#80ed99', 
                    fontWeight:'bold', 
                    padding:5, 
                    borderRadius:15, 
                    borderWidth:1, 
                    borderColor:'#80ed99'
                    }}>Add to cart </Text>
                </TouchableOpacity> ): ( <TouchableOpacity style={{marginRight:10, marginTop:10, alignItems:'center',}}
                onPress={
                    ()=>{
                        onRemoveFromCart(item);
                    }
                }> 
                    <Text 
                    style={{color:'#80ed99', 
                    fontWeight:'bold', 
                    padding:5, 
                    borderRadius:15, 
                    borderWidth:1, 
                    borderColor:'#80ed99'
                    }}> Remove from cart </Text>
                </TouchableOpacity> )
            }
           
            </View>
            
            {isWishlist ? (
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
                    onRemoveFromWishlist(item);
                }}>
                    <Image 
                    source={require('../images/heart.png')} 
                    style={{ margin:6, width:24, height:24, tintColor:'#14919b'}} 
                    />
                </TouchableOpacity>
            ):(
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
                    onAddWishlist(item);
                }}>
                    <Image 
                    source={require('../images/heart.png')} 
                    style={{ margin:6, width:24, height:24, }} 
                    />
                </TouchableOpacity>
            )}
            
        </View>
    )
}

export default CartItem

