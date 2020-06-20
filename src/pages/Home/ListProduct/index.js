import React from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const ListProduct = (props) => {
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 20,
          color: "#1ebdbd",
          textTransform: "uppercase",
          letterSpacing: 1.5,
          fontWeight: "700",
          marginBottom: 5,
        }}
      >
        On Sale!
      </Text>
      <FlatList
        horizontal={false}
        data={props.data}
        renderItem={({ item }) => (
          <RowProduct
            img={item.img}
            title={item.title}
            price={item.price}
            tekan={() => props.nav.navigate("Details", { title: item.title })}
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        numColumns={2}
        style={{ alignSelf: "center" }}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default ListProduct;

function RowProduct({ img, title, price, tekan }) {
  return (
    <TouchableWithoutFeedback onPress={tekan}>
      <View
        style={{
          width: Dimensions.get("window").width / 2 - 30,
          margin: 3,
        }}
      >
        <Image
          style={{
            resizeMode: "stretch",
            height: Dimensions.get("window").width / 2 - 30,
            width: Dimensions.get("window").width / 2 - 30,
            borderRadius: 5,
          }}
          source={img}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            margin: 5,
            height: 30,
            color: "#4d4d4d",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            margin: 5,
            marginBottom: 20,
            color: "#1ebdbd",
          }}
        >
          Rp {currencyFormat(price)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
