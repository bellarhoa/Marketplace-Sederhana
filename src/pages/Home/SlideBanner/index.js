import React from "react";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

const SlideBanner = (props) => {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        horizontal={true}
        data={props.data}
        renderItem={({ item }) => <Banner img={item.img} />}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default SlideBanner;

const styles = StyleSheet.create({
  banner: {
    resizeMode: "stretch",
    height: 160,
    width: 300,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
});

function Banner({ img }) {
  return <Image style={styles.banner} source={img} />;
}
