import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalCards from "../components/GlobalCards";
import { useGetCryptosQuery } from "../servicesRedux/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { cryptosList, isFetching } = useGetCryptosQuery();
  const globalStats = cryptosList?.data?.stats;
  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   const filteredData = cryptosList?.data?.coins.filter((coin) =>
  //     coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setCryptos(filteredData);
  // }, [cryptosList]);

  // if (isFetching) return <Text style={{ marginTop: 40 }}>"Loading..."</Text>;

  // console.log(cryptosList);

  return (
    <ScrollView style={{ marginTop: 40 }}>
      {/* <View>
        <TextInput
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </View> */}
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
