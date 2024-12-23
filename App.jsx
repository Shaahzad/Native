import { StatusBar, View } from 'react-native'
import React from 'react'
import Home from './src/components/pages/Home'


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <View style={{flex: 1}}> 
      <StatusBar backgroundColor='red'/>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </View>
  )
}

export default App