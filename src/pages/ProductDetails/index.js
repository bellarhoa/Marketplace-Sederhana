import React from "react";
import { View, Text, Button } from "react-native";

const ProductDetails = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Ini halaman Detail Produk</Text>
      <Text>{route.params.title}</Text>
    </View>
  );
};

export default ProductDetails;
