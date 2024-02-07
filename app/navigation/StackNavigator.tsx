import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home'
import ProductList from '../screens/ProductList'
import Favorites from '../screens/Favorites'
import Settings from '../screens/Settings'
import Details from '../screens/Details'
import Login from '../screens/Login'
import Registration from './../screens/Registration';

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
            headerStyle:{
                backgroundColor:"#91c4f8"
            },
            headerShown:false
        }}
        >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='details' component={Details} />
    </Stack.Navigator>
  )
}

const FavoritesStackNavigator = () => {
   return( <Stack.Navigator
    initialRouteName='favorites'
    screenOptions={{
        headerStyle:{
            backgroundColor:"#91c4f8"
        },
        headerShown:false
    }}
    >
        <Stack.Screen name='favorites' component={Favorites} />
    </Stack.Navigator>
   )
}

const LoginStackNavigator = () => {
   return( <Stack.Navigator
    initialRouteName='login'
    screenOptions={{
        headerStyle:{
            backgroundColor:"#91c4f8"
        },
        headerShown:false
    }}
    >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='registration' component={Registration} />
    </Stack.Navigator>
   )
}

const SettingsStackNavigator = () => {
   return( <Stack.Navigator
    initialRouteName='settings'
    screenOptions={{
        headerStyle:{
            backgroundColor:"#91c4f8"
        },
        headerShown:false
    }}
    >
        <Stack.Screen name='settings' component={Settings} />
    </Stack.Navigator>
   )
}

const ProductListStackNavigator = () => {
   return( <Stack.Navigator
    initialRouteName='products'
    screenOptions={{
        headerStyle:{
            backgroundColor:"#91c4f8"
        },
        headerShown:false
    }}
    >
        <Stack.Screen name='products' component={ProductList} />
    </Stack.Navigator>
   )
}

export  {MainStackNavigator, FavoritesStackNavigator, SettingsStackNavigator, ProductListStackNavigator, LoginStackNavigator};