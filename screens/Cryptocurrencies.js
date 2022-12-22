import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../servicesRedux/cryptoApi";
import { Card } from "antd";
import Cards from "../components/Cards";
import millify from "millify";
import { useNavigation } from "@react-navigation/native";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const navigation = useNavigation();
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const icons = cryptosList?.data.iconUrl;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, setSearchTerm]);

  if (isFetching) return <Text style={{ marginTop: 40 }}>"Loading..."</Text>;
  const demoImage =
    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  console.log(cryptosList);

  console.log(cryptos);
  return (
    <ScrollView>
      <View>
        {/* <View>
        <TextInput
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </View> */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {cryptos?.map((currency) => (
            // Adding th card key in a view
            // <View key={currency.uuid}>
            <Cards
              title={`${currency.rank}. ${currency.name}`}
              image={currency?.iconUrl || demoImage}
              body={millify(currency.price)}
              body1={millify(currency.marketCap)}
              body2={millify(currency.change)}
            />
            // </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Cryptocurrencies;
