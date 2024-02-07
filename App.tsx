// default import
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// internal import
import { AuthProvider } from './app/api/authContext';
import TabNavigator from './app/navigation/TabNavigator';
import { ProductProvider } from './app/api/productContext';
import { FavoriteProvider } from './app/api/favoriteContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(()=> { 
    AsyncStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const getFromLocalStore = async () => {
    const favorites = await AsyncStorage.getItem("favorites")
    if(favorites){
      setFavorites(JSON.parse(favorites))
    }
  }

  useEffect(()=> { 
    getFromLocalStore()
  }, [])
  
  return (
    <AuthProvider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
      <ProductProvider
        value={{ products, setProducts, currentProduct, setCurrentProduct }}
      >
        <FavoriteProvider value={{ favorites, setFavorites }}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </FavoriteProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

