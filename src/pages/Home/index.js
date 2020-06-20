import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import NavBar from "../NavBar";
import Welcome from "../Home/Welcome";
import SearchBox from "../Home/SearchBox";
import SlideBanner from "../Home/SlideBanner";
import ListProduct from "../Home/ListProduct";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.container}>
          <Welcome user="Bella" />
          {/* <SearchBox /> */}
          <SlideBanner
            data={[
              { id: "1", img: require("../../../assets/banner_diskon.jpg") },
              { id: "2", img: require("../../../assets/banner_covid.png") },
            ]}
          />
          <ListProduct data={product} nav={navigation} />
        </View>
      </ScrollView>
      <NavBar />
      {/* <View style={styles.navigation}>
        <NavBar title="Home" img="home" color="#1ebdbd" />
        <NavBar title="Orders" img="shopping-cart" color="#808080" />
        <NavBar title="Account" img="user" color="#808080" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  navigation: {
    height: 55,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
  },
});

const product = [
  {
    id: "1",
    img: require("../../../assets/product_mug(1).jpg"),
    title: "Town Home Decorating",
    price: 120550,
    desc: "deskripsi produk pertama",
  },
  {
    id: "2",
    img: require("../../../assets/product_phonecase(1).jpg"),
    title: "INSNIC Flowers Phone Case For iPhone",
    price: 80000,
    desc: "deskripsi produk kedua",
  },
  {
    id: "3",
    img: require("../../../assets/product_phonecase(2).jpg"),
    title: "Fashion Summer Fresh Leaf Case For iPhone Cute Phone Cases",
    price: 110000,
    desc: "deskripsi produk ketiga",
  },
  {
    id: "4",
    img: require("../../../assets/product_mug(2).jpg"),
    title: "Mr Ms Wedding Gift Box",
    price: 120550,
    desc: "deskripsi produk keempat",
  },
];
