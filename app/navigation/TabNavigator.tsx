import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStackNavigator, FavoritesStackNavigator, SettingsStackNavigator, ProductListStackNavigator, LoginStackNavigator } from './StackNavigator'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import FeatherIcons from "react-native-vector-icons/Feather";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import AuthContext from '../api/authContext';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle:{
            overflow:"hidden",
            backgroundColor:"#fff",
            height:50
        }
    }}>
      <Tab.Screen name='Home'  component={MainStackNavigator} 
        options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
      />
      <Tab.Screen name='ProductList' component={ProductListStackNavigator} 
       options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesignIcons name="tago" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name='Favorites' component={FavoritesStackNavigator} 
       options={{
        tabBarIcon: ({ size, color }) => (
          <OcticonsIcons name="heart" size={size} color={color} />
        ),
      }}
      />
        {
          isLoggedIn && (
            <Tab.Screen name='Settings' component={SettingsStackNavigator} 
              options={{
              tabBarIcon: ({ size, color }) => (
                <FeatherIcons name="settings" size={size} color={color} />
              ),
            }}
            />
          )
        }
        {
          !isLoggedIn && (
            <Tab.Screen name='Login' component={LoginStackNavigator} 
              options={{
              tabBarIcon: ({ size, color }) => (
                <AntDesignIcons name="login" size={size} color={color} />
              ),
            }}
            />
          )
        }
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})