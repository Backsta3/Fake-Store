// Default Imports
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Internal Imports
import { FIREBASE_AUTH } from '../../firebaseConfig';

const Login = () => {
    // React Hooks for state handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const SignIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            alert('success');
        } catch (error) {
            alert("Login failed")
        } finally{
            setLoading(false);
        }
    }

    const SignUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfully. Login with your credentials.');
        } catch (error) {
            alert("Failed to create new account")
        } finally{
            setLoading(false);
        }
    }

    

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
            <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(password) => setPassword(password)} secureTextEntry={true}></TextInput>

            { loading ? (<ActivityIndicator size="large" color="#0000ff" />) : 
            (<>
                <Button title="Login" onPress={SignIn}/>
                <Button title="Create new account" onPress={SignUp}/>
            </>)}
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
        backgroundColor: '#fff'
    }
});