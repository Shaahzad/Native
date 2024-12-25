import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import { StatusBar, StyleSheet, View } from 'react-native';
import Signup from './src/pages/Signup';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={'red'}/>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup}  options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/>
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