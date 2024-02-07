import { Text, View, Pressable, Image,ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductContext from "../api/productContext";
import { ScrollView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteContext from "../api/favoriteContext";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import AsyncStorage from '@react-native-async-storage/async-storage'

const Details = ({ navigation, route } : any) => {
  const { currentProduct, setCurrentProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const id=route.params.productId;

  const { favorites, setFavorites } = useContext(FavoriteContext) 

  const goBack =() => {
    navigation.goBack()
  }

  const addItemToFavorite = async () => {
    if (!favorites.find((item : any) => item.id === currentProduct.id)) {
      ToastAndroid.show("Item added to favorites", ToastAndroid.BOTTOM);
      setFavorites((prev : any) => [...prev, {...currentProduct}]);
    }
  } 

  const removeItemFromFavorite = async () => {
    const updatedFavorites = favorites.filter((item: any) => item.id !== currentProduct.id);
    if (updatedFavorites.length !== favorites.length) {
      ToastAndroid.show("Item removed from favorites", ToastAndroid.BOTTOM);
      setFavorites(updatedFavorites);
    }
  }

  const fetchProductById =async(id: Int16Array) =>{
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setCurrentProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchProductById(id)
  },[id])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", width: "100%", padding: 12 }}>
        <Image source={{ uri: currentProduct?.image }} style={{ resizeMode: "cover", height: 420 }} />
      </View>

      <View style={{ backgroundColor: "white", padding: 10 }}>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{currentProduct?.title}</Text>
              <Text style={{ fontSize: 12, color: "#888" }}>{currentProduct?.brand}</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 3 }}>Description</Text>
            <ScrollView style={{ height: 100 }}>
              <Text style={{ color: "#888", fontSize: 12, textAlign: "justify"}}>{currentProduct?.description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 16, left: 0, width: "100%", paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 32 }}>
          <View>
            <Text style={{ color: "#888", marginBottom: -4 }}>Total Price</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>${currentProduct?.price}</Text>
          </View>

          { favorites.find((item : any) => item.id === currentProduct.id) ?
            <Pressable onPress={removeItemFromFavorite} style={{ justifyContent: "center", alignItems: "center"}}>
                <OcticonsIcons name="heart" size={24} color={"red"} />
            </Pressable>
            :
            <Pressable onPress={addItemToFavorite} style={{ justifyContent: "center", alignItems: "center"}}>
                <OcticonsIcons name="heart" size={24} color={"black"} />
            </Pressable>
          }
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
