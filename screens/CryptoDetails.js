import { View, Text } from "react-native";
import React from "react";
import { useGetCryptoDetailsQuery } from "../servicesRedux/cryptoApi";

const CryptoDetails = ({ route, navigation }) => {
  const data = route.params;
  // const { datas, isFetching } = useGetCryptoDetailsQuery(titlePass);
  console.log(data);

  return (
    <View>
      <Text>{data.titlePass}</Text>
    </View>
  );
};

export default CryptoDetails;
