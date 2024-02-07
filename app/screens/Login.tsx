// Default Imports
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Pressable } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Internal Imports
import { FIREBASE_AUTH } from '../../firebaseConfig';
import AuthContext from '../api/authContext';

const Login = ({navigation} : any) => {

    const { setCurrentUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    if(isLoggedIn){
        return navigation.navigate('home');
    }

    // React Hooks for state handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const SignIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if(response){
                setCurrentUser(response.user)
                setIsLoggedIn(true)
                    navigation.navigate('home')
            }
        } catch (error) {
            alert("Login failed")
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
            </>)}
        </KeyboardAvoidingView>
            <Pressable 
                onPress={
                    () => navigation.navigate('registration')
                }>
                <Text style={{ marginTop: 20 , textAlign: "center"}}>   
                    Don't have an account?
                </Text>
            </Pressable>
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