import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Main from '../bottom/Main'
import Search from '../bottom/Search'
import Cart from '../bottom/Cart'
import Wishlist from '../bottom/Wishlist'
import {Profile} from '../bottom/Profile'
import { useSelector } from 'react-redux'

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = useSelector(state=>state);
  // console.log('data', data);


  return (
    <View  style={{flex:1}}>

      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View  
      style={{
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
      }}>
        <TouchableOpacity style={styles.button}  onPress={()=> {setSelectedTab(0)}}>
          <Image source={require('../images/home.png')} style={[styles.image, {tintColor: selectedTab == 0 ? '#14919b' : 'black'}]} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={()=> {setSelectedTab(1)}}>
          <Image source={require('../images/search.png')} style={[styles.image, {tintColor: selectedTab == 1 ? '#14919b' : 'black'}]}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={()=> {setSelectedTab(2)}}>
          <Image source={require('../images/bag.png')} style={[styles.image, {tintColor: selectedTab == 2 ? '#14919b' : 'black'}]}/>
          <View style={{width:20, height:20, borderRadius:10, backgroundColor:'#14919b', position:'absolute', right:20}}>
            <Text style={{color:'white', marginLeft:6}}>{(data as any).reducers.length}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={()=> {setSelectedTab(3)}}>
          <Image source={require('../images/heart.png')} style={[styles.image, {tintColor: selectedTab == 3 ? '#14919b' : 'black'}]}/>
          <View style={{width:20, height:20, borderRadius:10, backgroundColor:'#14919b', position:'absolute', right:20}}>
            <Text style={{color:'white', marginLeft:6}}>{(data as any).reducers2.length}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={()=> {setSelectedTab(4)}}>
          <Image source={require('../images/user_bottom.png')} style={[styles.image, {tintColor: selectedTab == 4 ? '#14919b' : 'black'}]}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  button:{
    width:'20%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  image:{
    width: 30,
    height: 30,
  }
})