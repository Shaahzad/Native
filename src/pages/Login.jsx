import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
console.log(navigation)
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headingtext}>
        <Text style={styles.login}>Welcome Back</Text>
        <Text style={styles.loginchild}>Enter Your Credential for Login</Text>
        </View>
      </View>
      <View style={styles.forminput}>
        <TextInput placeholder='User Name' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input} secureTextEntry/>
        <TouchableOpacity style={styles.loginbtn} onPress={()=> alert('Login Successfully')} >
            <Text style={styles.btntext}>Login Now</Text>
        </TouchableOpacity>
      <View style={styles.btncontainer}>
        <Text style={styles.forgotpass}>Forgot Password?</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  ) 
}

export default Login

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    heading:{
        flex: 1,
    },
    headingtext:{
    justifyContent: 'center',
    alignItems: 'center',
    },
    login:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    signup:{
        color:'#EF4F1F', 
        fontWeight: 'bold'
    },
    forgotpass:{
        color: '#EF4F1F', 
        fontWeight: 'bold', 
        marginTop: 50
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
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 80
    },
    loginbtn:{
        backgroundColor: '#EF4F1F',
        padding: 12,
        borderRadius: 10,
    },
    btntext:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
})