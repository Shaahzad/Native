import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Entypo";

const Home = () => {
  return (
    <View>
      <Icon name='chevron-left'/>
      <Text style={{fontSize: 30}}>
        Home Page
      </Text>
    </View>
  )
}

export default Home


