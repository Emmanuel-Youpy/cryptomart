import { View, Text, ScrollView } from "react-native";
import React from "react";
import GlobalCards from "../components/GlobalCards";
import { useGetCryptosQuery } from "../servicesRedux/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import CryptocurrenciesAll from "./CryptocurrenciesAll";
import News from "./News";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Text>"Loading..."</Text>;

  console.log(data);

  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <GlobalCards
            title="Total Cryptocurrencies"
            value={millify(globalStats.total)}
          />
          <GlobalCards
            title="Total Market Cap.."
            value={millify(globalStats.totalMarketCap)}
          />
          <GlobalCards
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
          <GlobalCards
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
          <GlobalCards
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
          <GlobalCards />
        </View>
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
              Top 10 Cryptocurrencies
            </Text>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("CryptocurrenciesAll")}
            >
              <Text style={{ fontSize: 10, color: "skyblue" }}>Show More</Text>
            </TouchableOpacity> */}
          </View>

          <Cryptocurrencies simplified />
        </View>
        <View style={{ padding: 10 }}>
          <Text>Top 10 News</Text>
          <News />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
