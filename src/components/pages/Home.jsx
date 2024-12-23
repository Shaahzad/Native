import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = () => {

  const HandleModal = () => {
    return(
      Alert.alert('Success', 'Your account has been created successfully')
    )
  }
  const HandleModallogin = () => {
    return(
      Alert.alert('Success', 'You have logged in successfully')
    )
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerheading}>Signup</Text>
        <Text style={styles.headerchild}>Create your account</Text>
      </View>
      <ScrollView style={styles.signupform}>
        <TextInput placeholder='User Name' style={styles.input}/>
        <TextInput placeholder='Email' keyboardType='email-address' style={styles.input}/>
        <TextInput placeholder='Password' secureTextEntry style={styles.input}/>
        <TextInput placeholder='Confirm Password' secureTextEntry style={styles.input}/>
        <View>
        <TouchableOpacity style={styles.signupbtncontainer} onPress={HandleModal}>
          <Text style={styles.signupbtn}>Signup</Text>          
        </TouchableOpacity>
        <Text style={styles.or}>or</Text>
        <TouchableOpacity style={styles.signupbtncontainer} onPress={HandleModallogin}>
          <Text style={styles.loginbtn}>Login</Text>          
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flex: 0.3,
    justifyContent: 'center'
  },
  signupform:{
    flex: 3,
    // backgroundColor: 'green',
    padding: 12
  },
  headerheading: {
   fontWeight: 'bold',
   fontSize: 40,
   textAlign: 'center'
  },
  headerchild:{
    textAlign: 'center'
  },
  input:{
    margin: 8,
    paddingHorizontal: 10,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FCEDE8',
  },
  signupbtncontainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupbtn: {
    backgroundColor: '#EF4F1F',
    padding: 15,
    borderRadius: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
    marginTop: 10
  },
  or: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },
  loginbtn:{
    padding: 10,
    borderRadius: 40,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EF4F1F',
    width: '100%'
  }
})



export default Home


