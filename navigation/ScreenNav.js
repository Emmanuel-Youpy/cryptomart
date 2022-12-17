import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import Cryptocurrencies from "../screens/Cryptocurrencies";

const ScreenNav = () => {
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cryptocurrencies" component={Cryptocurrencies} />
      </Stack.Navigator>
    </View>
  );
};

export default ScreenNav;
