import { View, Text, ScrollView } from "react-native";
import React from "react";
import News from "./News";

const NewsAll = () => {
  return (
    <ScrollView>
      <View style={{ paddingTop: 40, paddingHorizontal: 10 }}>
        <View style={{ alignItems: "center", paddingBottom: 20 }}>
          <Text style={{ fontWeight: "bold" }}>News</Text>
        </View>
        <News />
      </View>
    </ScrollView>
  );
};

export default NewsAll;
