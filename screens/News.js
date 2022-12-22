import { View, Text } from "react-native";
import React from "react";
import { useGetCryptoNewsQuery } from "../servicesRedux/cryptoNewsApi";
import NewsCard from "../components/NewsCard";
import millify from "millify";
import { useNavigation } from "@react-navigation/native";
import { A } from "@expo/html-elements";
import * as Linking from "expo-linking";
import Moment from "react-moment";
import * as WebBrowser from "expo-web-browser";
import moment from "moment";
import { Avatar } from "@rneui/themed";

const News = ({ simplified }) => {
  const navigation = useNavigation();
  const { data: cryptonews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });
  const demoImage =
    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  if (!cryptonews?.value) return <Text>Loading</Text>;
  console.log(cryptonews);

  const google = "https://google.com";
  const Abc = (
    <Text>
      <A href={google}>Goooo</A>
    </Text>
  );

  const outLink = () => {
    return (
      <View>
        <Text>
          <A href={google}>Goooo</A>
        </Text>
      </View>
    );
  };
  return (
    <View>
      {cryptonews.value.map((news, i) => (
        <NewsCard
          key={news.id}
          title={news.name}
          image={news?.image?.thumbnail?.contentUrl || demoImage}
          image2={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
          date={moment(news?.datePublished).startOf("ss").fromNow()}
          name={news.provider[0]?.name}
          onPress={() => Linking.openURL(news.url)}
        />
      ))}
    </View>
  );
};

export default News;
