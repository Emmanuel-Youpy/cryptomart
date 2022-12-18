import { View, Text, ScrollView } from "react-native";
import React from "react";
import GlobalCards from "../components/GlobalCards";
import { useGetCryptosQuery } from "../servicesRedux/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return <Text style={{ marginTop: 40 }}>"Loading..."</Text>;

  console.log(data);

  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View>
        <View style={{ padding: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ paddingLeft: 10, fontWeight: "bold", fontSize: 18 }}>
              Top 100 Cryptocurrencies
            </Text>
          </View>

          <Cryptocurrencies />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
