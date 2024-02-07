import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import AuthContext from "../api/authContext";
import ProductCard from "../components/ProductCard";

const Home = ({navigation} : any) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllProducts();
    };
  
  fetchData();
  }, [])

  const { isLoggedIn,currentUser} = useContext(AuthContext);

  const renderProductPairs = (products: any) => {
    const pairs = [];
    for (let i = 0; i < products.length; i += 2) {
      pairs.push(
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Pressable onPress={() => navigation.navigate("details", { productId: products[i].id })}>
            <ProductCard title={products[i].title} image={products[i].image} price={products[i].price} brand={products[i].brand} />
          </Pressable>
          {products[i + 1] && (
            <Pressable onPress={() => navigation.navigate("details", { productId: products[i + 1].id })}>
              <ProductCard title={products[i + 1].title} image={products[i + 1].image} price={products[i + 1].price} brand={products[i + 1].brand} />
            </Pressable>
          )}
        </View>
      );
    }
    return pairs;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginTop: 6, paddingHorizontal: 5 }}>
          <View style={{ flexDirection: "row", backgroundColor: "#d3d3d3", padding: 2, paddingHorizontal: 10, borderRadius: 30, alignItems: "center" }}>
            <View>
              <MaterialIcons name="search" size={24} color={"#111"} />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 4 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10 }}>
        <Pressable onPress={() => navigation.navigate("ProductList")}>
          <Text style={{ fontSize: 12, color: '#718096' }}>View All</Text>
        </Pressable>
      </View>
      <ScrollView style={{ marginTop: 4, marginLeft: 5 }} showsHorizontalScrollIndicator={false}>
        {renderProductPairs(products)}
      </ScrollView>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home