import React from "react";
import { View, Text } from "react-native";

const Welcome = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 13,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "#4d4d4d" }}>
          Hello,{" "}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#1ebdbd",
            }}
          >
            {props.user}
          </Text>
        </Text>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#4d4d4d",
          marginTop: 3,
        }}
      >
        We Know Every Gift For Every Person
      </Text>
    </View>
  );
};

export default Welcome;
