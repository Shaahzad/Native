import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>App</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  view:{
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})

export default App