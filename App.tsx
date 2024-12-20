import { StatusBar, View } from 'react-native'
import React from 'react'
import Home from './src/components/pages/Home'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor='red'/>
      <Home />
    </View>
  )
}

export default App