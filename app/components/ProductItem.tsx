import { Text, View, Image } from "react-native";
import React from "react";

const ProductItem = ({ title, brand, image, price } : any) => (
  <View style={{ backgroundColor: "white", padding: 2, justifyContent: "center", alignItems: "center", borderRadius: 8, width: "100%", marginBottom: 4, borderWidth: 1, borderColor: "#808080" }}>
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={{ uri: image }} style={{ borderRadius: 8, height: 80, width: 80, objectFit: "contain" }} />
      </View>
      <View style={{ flex: 1, padding: 2 }}>
        <View>
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 12 }}>{brand}</Text>
        </View>
        <View style={{ marginTop: 2 }}>
          <Text style={{ fontSize: 12 }}>Price: ${price}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default ProductItem;

