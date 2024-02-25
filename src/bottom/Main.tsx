import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
// import aa from '../images/aa.webp'
// import aa2 from '../images/aa2.avif'
// import aa3 from '../images/aa3.webp'
// import aa4 from '../images/aa4.avif'

import { products } from '../Products.tsx'
import MyProductItem from '../common/MyProductItem.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/actions/Actions.tsx'


const Main = () => {
    const dispatch = useDispatch();
    const [category, setCategory]= useState<any[]>([]);
    const [shirt, setShirt]= useState<any[]>([]);
    const [jacket, setJacket]= useState<any[]>([]);
    const [jeans, setJeans]= useState<any[]>([]);
    const [shoes, setShoes]= useState<any[]>([]);
    const [slippers, setSlippers]= useState<any[]>([]);

    useEffect(()=>{
      let tempCategory = [];
      products.category.map(item =>{
        tempCategory.push(item)
      });
      setCategory(tempCategory);

      setShirt(products.category[0].data);
      setJeans(products.category[1].data);
      setShoes(products.category[2].data);
      setJacket(products.category[3].data);
      setSlippers(products.category[4].data);
      console.log(JSON.stringify(products.category[0].data));
    },[])

  const items =useSelector(state=>state);
  //console.log('items', items);
  return (
    <ScrollView>
      <Header/>
      <Image source={require('../images/aa.webp')} 
          style={{width: '95%', height: 200, alignItems:'center',justifyContent:'center', marginLeft:10, marginTop:10, borderRadius:7}}
          />

      <View>
        <FlatList data={category} 
        horizontal 
        renderItem={({item, index})=>{
          return(
            <TouchableOpacity style={{padding:15, borderWidth:1, margin:10, borderRadius:10, borderColor:'#14919b' }}>
              <Text style={{color:'#14919b'}}>{item.category}</Text>
            </TouchableOpacity>
          )
        
        }}
        />
      </View>

      <Text style={{color:'#213a57', marginLeft:10, marginTop:10}}> Shirts</Text>
      <View>
        <FlatList data={shirt} 
        horizontal 
        renderItem={({item, index})=>{
          return(
            <MyProductItem item={item}
            onAddToWishlist={(x)=>{
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
            }}
            onAddToCart={(x)=>{
              dispatch({ type: 'ADD_TO_CART', payload: item })
            }}
            />
          )
        
        }}
        />
      </View>

      <Text style={{color:'#213a57', marginLeft:10, marginTop:10}}> Jeans</Text>
      <View>
        <FlatList data={jeans} 
        horizontal 
        renderItem={({item, index})=>{
          return(
            <MyProductItem item={item} 
            onAddToWishlist={(x)=>{
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
            }}
            onAddToCart={(x)=>{
              dispatch({ type: 'ADD_TO_CART', payload: item })
            }}/>
          )
        
        }}
        />
      </View>

      <Text style={{color:'#213a57', marginLeft:10, marginTop:10}}> Shoes</Text>
      <View>
        <FlatList data={shoes} 
        horizontal 
        renderItem={({item, index})=>{
          return(
            <MyProductItem item={item}
            onAddToWishlist={(x)=>{
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
            }}
            onAddToCart={(x)=>{
              dispatch({ type: 'ADD_TO_CART', payload: item })
            }}
            />
          )
        
        }}
        />
      </View>

      <Text style={{color:'#213a57', marginLeft:10, marginTop:10}}> Jackets</Text>
      <View>
        <FlatList data={jacket} 
        horizontal 
        renderItem={({item, index})=>{
          return(
            <MyProductItem item={item}
            onAddToWishlist={(x)=>{
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
            }}
            onAddToCart={(x)=>{
              dispatch({ type: 'ADD_TO_CART', payload: item })
            }}
            />
          )
        
        }}
        />
      </View>

      <Text style={{color:'#213a57', marginLeft:10, marginTop:10}}> Slippers</Text>
      <View>
        <FlatList data={slippers} 
        horizontal 
        renderItem={({item, index})=>{
          return(
            <MyProductItem item={item}
            onAddToWishlist={(x)=>{
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
            }}
            onAddToCart={(x)=>{
              dispatch({ type: 'ADD_TO_CART', payload: item })
            }}
            />
          )
        
        }}
        />
      </View>
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({})