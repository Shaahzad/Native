import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import { StatusBar, StyleSheet, View } from 'react-native';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={'red'}/>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
      flex: 1
  }
})

export default App