import { View, Text } from "react-native";
import React from "react";

const CryptoDetails = ({ route, navigation }) => {
  const data = route.params;
  console.log(data);

  return (
    <View>
      <Text>CryptoDetails</Text>
      <Text>{data.titlePass}</Text>
    </View>
  );
};

export default CryptoDetails;
