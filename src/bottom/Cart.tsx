import { FlatListComponent, ScrollView, StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const [cartList, setCartList] = useState<any[]>([]) // Update the type of cartList to any[]
  const cartData = useSelector((state: any)=>state.reducers)
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={{flex:1}}>
        <FlatList data={cartData}
        renderItem={({item, index})=>{
          return(
            <CartItem
            onAddWishlist={()=>{
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item }) // Add the missing 'type' property
            }}
            onRemoveFromWishlist={()=>{}}
            onAddToCart={()=>{}}
            isWishlist={''}
            item={item}
            onRemoveFromCart={()=>{
              dispatch({ type: 'REMOVE_FROM_CART', payload: index }) // Add the missing 'type' property
            }}
            />
          )
        }}
        />

      </View>
    </ScrollView>  )
}

export default Cart

const styles = StyleSheet.create({})