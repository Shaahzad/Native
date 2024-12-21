import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Entypo";

const Home = () => {
  return (
    <View style={{flex: 1}}>
    <View style={stylesheet.container}>
      <TouchableOpacity>
    <Icon name='chevron-left' style={stylesheet.icon}/>
      </TouchableOpacity>
      <Text style={stylesheet.logo}>
        Loft Design
      </Text>
    </View>
      <View>
      <TextInput placeholder='UserName'/>
      </View>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  icon:{
    backgroundColor: 'grey',
    fontSize: 30,
    color: 'white',
    width: 30,
  },
  logo:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'grey',
    marginLeft: 70,
  }
})

export default Home


