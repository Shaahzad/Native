import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Signup = ({navigation}) => {
console.log(navigation)

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headingtext}>
        <Text style={styles.signup}>Sign Up</Text>
        <Text style={styles.signupchild}>Create Your Account</Text>
        </View>
      </View>
      <View style={styles.forminput}>
        <TextInput placeholder='User Name' style={styles.input}/>
        <TextInput placeholder='Email' style={styles.input} keyboardType='email-address'/>
        <TextInput placeholder='Password' style={styles.input} secureTextEntry/>
        <TextInput placeholder='Confirm Password' style={styles.input} secureTextEntry/>
        <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.signupbtn} onPress={()=> alert('Account Created Successfully')} >
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.or}>Or</Text>
        <TouchableOpacity  style={styles.loginbtn} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.btntextlogin}>login</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  ) 
}

export default Signup

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    heading:{
        flex: 1,
    },
    headingtext:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    signup:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    signupchild:{
        fontSize: 12
},
    forminput:{
        flex: 2,
        padding: 20,
        gap: 12,
    },
    input:{
        backgroundColor: '#fae6e0',
        padding: 10,
        borderRadius: 10,
        height: 60,
    },
    btncontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    or:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginbtn:{
        borderWidth: 2,
        borderColor: '#EF4F1F', 
        padding: 12,
        borderRadius: 30,
        width: '100%'
    },
    signupbtn:{
        backgroundColor: '#EF4F1F',
        padding: 12,
        borderRadius: 30,
        width: 250,
        alignSelf: 'center',
    },
    btntext:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btntextlogin:{
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
    }
})