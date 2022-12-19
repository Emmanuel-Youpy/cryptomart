import { View, Text } from "react-native";
import React from "react";
import { useGetCryptoNewsQuery } from "../servicesRedux/cryptoNewsApi";

const News = ({ simplified }) => {
  const { data: cryptonews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });
  console.log(cryptonews);
  return (
    <View>
      <Text>News</Text>
    </View>
  );
};

export default News;
