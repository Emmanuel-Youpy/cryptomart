import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CryptocurrenciesAll from "../screens/CryptocurrenciesAll";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

const ScreenNav = () => {
  return (
    <View>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="CryptocurrenciesAll"
          component={CryptocurrenciesAll}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ScreenNav;
