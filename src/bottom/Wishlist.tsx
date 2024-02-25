import { FlatListComponent, ScrollView, StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
  const [wishList, setwishList] = useState<any[]>([]) // Update the type of cartList to any[]
  const wishlistData = useSelector((state: any)=>state.reducers2)
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={{flex:1}}>
        <FlatList data={wishlistData}
        renderItem={({item, index})=>{
          return(
            <CartItem
            onAddWishlist={()=>{}}
            onRemoveFromCart={()=>{}}
            onRemoveFromWishlist={()=>{
              dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: index }) // Add the missing 'type' property
            }}
            isWishlist= {'true'}
            item={item}
            onAddToCart={()=>{
              dispatch({ type: 'ADD_TO_CART', payload: item }) // Add the missing 'type' property
            }}
            />
          )
        }}
        />

      </View>
    </ScrollView>  )
}

export default Wishlist

