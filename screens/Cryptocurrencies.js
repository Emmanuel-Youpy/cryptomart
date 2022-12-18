import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useGetCryptosQuery } from "../servicesRedux/cryptoApi";
import { Card } from "antd";
import Cards from "../components/Cards";
import millify from "millify";
import CryptocurrenciesAll from "./CryptocurrenciesAll";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data.coins);
  const icons = cryptosList?.data.iconUrl;

  console.log(cryptos);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {cryptos?.map((currency) => (
          <Cards
            title={`${currency.rank}. ${currency.name}`}
            image={currency.iconUrl}
            key={currency.id}
            body={millify(currency.price)}
            body1={millify(currency.marketCap)}
            body2={millify(currency.change)}
          />
        ))}
      </View>
    </View>
  );
};

export default Cryptocurrencies;
