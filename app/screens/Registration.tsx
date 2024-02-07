// Default Imports
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'

// Internal Imports
import { FIREBASE_AUTH } from '../../firebaseConfig';
import AuthContext from '../api/authContext';

const Login = ({navigation} : any) => {

  const { isLoggedIn } = useContext(AuthContext);

  if(isLoggedIn){
    return navigation.navigate('home');
  }

    // React Hooks for state handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const SignUp = async () => {
      setLoading(true);
      if(password === confirmPassword){
        try {
          const response = await createUserWithEmailAndPassword(auth, email, password);
          alert('Account created successfully. Login with your credentials.');
          if(response){
              navigation.navigate('login')
          }
        } catch (error) {
            alert("Failed to create new account")
        } finally{
            setLoading(false);
        }
      }
    }

    

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
            <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(password) => setPassword(password)} secureTextEntry={true}></TextInput>
            <TextInput value={confirmPassword} style={styles.input} placeholder='Confirm Password' autoCapitalize='none' onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} secureTextEntry={true}></TextInput>

            { loading ? (<ActivityIndicator size="large" color="#0000ff" />) : 
            (<>
                <Button title="Create new account" onPress={SignUp}/>
            </>)}
            <Text style={{ marginTop: 20 , textAlign: "center"}}
                onPress={
                   () =>  navigation.navigate('login')
                }
            >Have an account?</Text>
        </KeyboardAvoidingView>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 12
    }
});