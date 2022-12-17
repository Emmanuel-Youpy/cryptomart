import { View, Text } from "react-native";
import React from "react";

const GlobalCards = ({ title, value }) => {
  return (
    <View
      style={{
        width: "45%",
        borderRadius: 10,
        padding: 10,
        margin: 5,

        // flexGrow: 1,
      }}
    >
      <Text style={{ color: "gray", fontSize: 13 }}>{title}</Text>
      <Text style={{ paddingTop: 10, fontSize: 30 }}>{value}</Text>
    </View>
  );
};

export default GlobalCards;
