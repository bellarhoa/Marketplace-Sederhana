import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

function NavBar() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon
          type="feather"
          size={26}
          name="home"
          color="#1ebdbd"
          underlayColor="#1ebdbd"
        />
        {/* <Text
          style={{
            fontSize: 15,
            color: props.color,
          }}
        >
          {props.title}
        </Text> */}
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon
          type="feather"
          size={26}
          name="shopping-cart"
          color="#808080"
          underlayColor="#1ebdbd"
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon
          type="feather"
          size={26}
          name="user"
          color="#808080"
          underlayColor="#1ebdbd"
        />
      </View>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
  },
});
