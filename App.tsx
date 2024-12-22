import { StatusBar, View } from 'react-native'
import React from 'react'
import Home from './src/components/pages/Home'

const App = () => {
  return (
    <View style={{flex: 1}}> 
      <StatusBar backgroundColor='red'/>
      <Home />
    </View>
  )
}

export default App