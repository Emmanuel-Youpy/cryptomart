import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";

const Cards = ({ title, image, key, body, body1, body2 }) => {
  return (
    <View
      style={{
        width: "47%",
        borderRadius: 10,
        padding: 15,
        margin: 5,
        borderWidth: 0.5,
        borderColor: "lightgrey",
      }}
    >
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
        key={key}
      >
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Image source={{ uri: image }} style={{ width: 15, height: 15 }} />
      </View>
      <Divider width={0.5} color={"lightgray"} padding={5} />

      <View style={{ paddingTop: 10 }}>
        <Text style={{ paddingBottom: 5 }}>Price: {body}</Text>
        <Text style={{ paddingBottom: 5 }}>Market Cap: {body1}</Text>
        <Text style={{ paddingBottom: 5 }}>Daily Change: {body2}</Text>
      </View>
    </View>
  );
};

export default Cards;
