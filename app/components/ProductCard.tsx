import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductCard = ({ title, brand, price, image } : any) => {
  return (
    <View style={{ maxWidth: 150, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 6 }}>
      <Image 
        source={{
            uri: image
          }} 
          style={{ borderRadius: 8, height: 150, width: 120 }} />
      <View style={{ marginTop: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 12 }}>{brand}</Text>
        <Text style={{ fontWeight: 'bold' }}>${price}</Text>
      </View>
    </View>
  );
}

export default ProductCard;
