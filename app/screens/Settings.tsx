import { View, Pressable, ToastAndroid, Text, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AuthContext from '../api/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FavoriteContext from '../api/favoriteContext';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const Settings = ({ navigation } : any) => {
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser} = useContext(AuthContext);
  const { setFavorites, favorites } = useContext(FavoriteContext) 

  const auth = FIREBASE_AUTH;

  const handleLogout = async () => {
    const res = await signOut(auth);
      ToastAndroid.show("Logged Out Successfully",ToastAndroid.BOTTOM)
      setIsLoggedIn(false);
      setCurrentUser(null);
      setFavorites([]);
  }
  
  useEffect(() => {
    if(isLoggedIn === false) navigation.navigate('home');
  }, [isLoggedIn])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, padding: 6, justifyContent: 'space-between' }}>
      <View>
      <View style={{ marginTop: 16, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ borderWidth: 1, borderColor: '#718096', borderRadius: 8 }}>
        <Image
           source={{
            uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ height: 128, width: 128, resizeMode: 'cover' }}
        />
      </View>
    </View>
        <View style={{ marginTop: 6 }}>
          {isLoggedIn ? (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#718096' }}>{currentUser?.email}</Text>
            </View>
          ) : (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Login to view your Profile!</Text>
            </View>
          )}
        </View>
      </View>
      {isLoggedIn && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Pressable onPress={handleLogout} style={{ backgroundColor: 'black', width: '100%', paddingVertical: 10, borderRadius: 8 }}>
            <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Log Out</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Settings