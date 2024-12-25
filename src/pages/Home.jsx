import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
console.log(navigation)

  return (
    <View>
      <Text>Home</Text>
      <Button title='Go To'   
      onPress={() => navigation.navigate('Login')} 
      />
    </View>
  ) 
}

export default Home

const styles = StyleSheet.create({})