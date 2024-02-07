import { Pressable, ScrollView, Text } from "react-native";
import React, { useContext, useEffect } from 'react'
import FavoriteContext from '../api/favoriteContext'
import { SafeAreaView } from "react-native-safe-area-context";
import ProductItem from "../components/ProductItem";
import AuthContext from "../api/authContext";
import Login from "./Login";

const Favorites = ({ navigation } : any ) => {
  const { setFavorites, favorites } = useContext(FavoriteContext) 
  const { isLoggedIn, currentUser} = useContext(AuthContext);


  return (
    (isLoggedIn && currentUser) ?
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 8 }}>
      <Text style={{ fontSize: 24, textAlign: "center" , marginVertical: 10 }} >Favorites</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {favorites.length !==0 ? Array.isArray(favorites) && favorites?.map((product: any) => (
          <Pressable key={product.id} onPress={() => navigation.navigate("details", { productId: product?.id })}>
            <ProductItem
              title={product?.title}
              image={product?.image}
              price={product?.price}
              brand={product?.brand}
            />
          </Pressable>
        )): (<Text style={{ textAlign: "center" }} >Add some product into favorites from product's details page.</Text>)}
      </ScrollView>
    </SafeAreaView>
    :
    <Login/>
  );

}

export default Favorites