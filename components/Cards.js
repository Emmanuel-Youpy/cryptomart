import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ title, image, key, body, body1, body2, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width: "47%",
        borderRadius: 10,
        padding: 15,
        margin: 5,
        borderWidth: 0.5,
        borderColor: "lightgrey",
      }}
      onPress={() =>
        navigation.navigate("CryptoDetails", {
          titlePass: title,
          
        })
      }
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Image source={{ uri: image }} style={{ width: 15, height: 15 }} />
      </View>
      <Divider width={0.5} color={"lightgray"} padding={5} />

      <View style={{ paddingTop: 10 }}>
        <Text style={{ paddingBottom: 5 }}>Price: {body}</Text>
        <Text style={{ paddingBottom: 5 }}>Market Cap: {body1}</Text>
        <Text style={{ paddingBottom: 5 }}>Daily Change: {body2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
