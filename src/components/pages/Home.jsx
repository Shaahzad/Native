import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerheading}>Signup</Text>
        <Text style={styles.headerchild}>Create your account</Text>
      </View>
      <View style={styles.signupform}>
        <TextInput placeholder='User Name' style={styles.input}/>
        <TextInput placeholder='Email' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input}/>
        <TextInput placeholder='Confirm Password' style={styles.input}/>
        <View>
        <TouchableOpacity style={styles.signupbtncontainer}>
          <Text style={styles.signupbtn}>Signup</Text>          
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>or</Text>
        <TouchableOpacity style={styles.signupbtncontainer}>
          <Text style={styles.signupbtn}>Login</Text>          
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
    backgroundColor: 'red',
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
  loginbtn:{
    
  }
})



export default Home


