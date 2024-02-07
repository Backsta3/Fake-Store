import { Pressable, ScrollView, Text } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductItem from "../components/ProductItem";
import ProductContext from "../api/productContext";

const ProductList = ({ navigation } : any ) => {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  const goBack =() => {
    navigation.goBack()
  }

  const fetchAllProducts = async () => {
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
  }, [setProducts]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 8 }}>
      <Text style={{ fontSize: 24, textAlign: "center" , marginVertical: 10 }} >Available Products</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.isArray(products) && products?.map((product: any) => (
          <Pressable key={product.id} onPress={() => navigation.navigate("details", { productId: product?.id })}>
            <ProductItem
              title={product?.title}
              image={product?.image}
              price={product?.price}
              brand={product?.brand}
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList;

