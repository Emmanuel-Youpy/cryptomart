import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { A } from "@expo/html-elements";
import { Avatar } from "@rneui/themed";

const NewsCard = ({
  title,
  image,
  image2,
  date,
  desc,
  onPress,
  googleLink,
  name,
}) => {
  const google = "https://google.com";

  return (
    <TouchableOpacity
      style={{
        width: "98%",
        borderRadius: 10,
        paddingTop: 10,
        margin: 5,
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <View style={{ width: "75%" }}>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: image2 }}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
            <Text>{name}</Text>
          </View>
          <View>
            <Text style={{ color: "gray" }}>{date}</Text>
          </View>
        </View>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </View>
      <Text style={{ color: "gray" }}>{desc}</Text>

      <View style={{ width: "20%", padding: 5 }}>
        <Image
          source={{ uri: image }}
          style={{ width: 80, height: 80, borderRadius: 5 }}
        />
      </View>
      <View>
        <Text>
          {" "}
          <A href="https://google.com">{googleLink}</A>;
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
