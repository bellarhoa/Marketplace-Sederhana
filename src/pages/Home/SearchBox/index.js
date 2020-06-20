import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

class SearchBox extends React.Component {
  render() {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "#808080",
          borderRadius: 5,
          padding: 6,
          backgroundColor: "white",
          flexDirection: "row",
          shadowOffset: { width: 5, height: 6 },
          shadowColor: "#808080",
          shadowOpacity: 0.1,
          justifyContent: "flex-start",
        }}
      >
        <Icon
          type="feather"
          iconStyle={{ marginRight: 5 }}
          size={20}
          name="search"
          color="#808080"
        />
        <TextInput
          placeholder="Try Florist, Cake, Potrait"
          style={{ fontSize: 16 }}
        />
      </View>
    );
  }
}

export default SearchBox;
