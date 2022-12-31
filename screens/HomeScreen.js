import { View, Text, ScrollView } from "react-native";
import React from "react";
import GlobalCards from "../components/GlobalCards";
import { useGetCryptosQuery } from "../servicesRedux/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { TouchableOpacity } from "react-native";
import { A } from "@expo/html-elements";

const HomeScreen = ({ navigation }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  const outLink = () => {
    return (
      <Text>
        {" "}
        <A href="https://google.com">Go to Google</A>;
      </Text>
    );
  };
  const google = "https://google.com";

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

        <View style={{ padding: 5, paddingTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 5,
              alignItems: "center",
              paddingBottom: 15,
            }}
          >
            <Text style={{ paddingLeft: 10, fontWeight: "bold", fontSize: 18 }}>
              Top 10 Cryptocurrencies
            </Text>
            <TouchableOpacity
              style={{ paddingBottom: 0 }}
              onPress={() => navigation.navigate("CryptocurrenciesAll")}
            >
              <Text style={{ fontSize: 12, color: "blue", fontWeight: "bold" }}>
                Show More
              </Text>
            </TouchableOpacity>
          </View>

          <Cryptocurrencies simplified />
        </View>
        <View style={{ padding: 10, paddingTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}> News</Text>
            <TouchableOpacity onPress={() => navigation.navigate("NewsAll")}>
              <Text style={{ fontSize: 12, color: "blue", fontWeight: "bold" }}>
                Show More
              </Text>
            </TouchableOpacity>
          </View>
          <News />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
