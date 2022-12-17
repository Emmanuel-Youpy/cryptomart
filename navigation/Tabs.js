import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Exchanges from "../screens/Exchanges";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cryptocurrencies from "../screens/Cryptocurrencies";
import CryptoDetails from "../screens/CryptoDetails";
import { Ionicons } from "@expo/vector-icons";
import News from "../screens/News";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "red" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Exchanges") {
            iconName = focused ? "md-search-sharp" : "md-search-outline";
          } else if (route.name === "Cryptocurrencies") {
            iconName = focused ? "md-add-sharp" : "md-add-outline";
          } else if (route.name === "CryptoDetails") {
            iconName = focused
              ? "ios-notifications-sharp"
              : "ios-notifications-outline";
          } else if (route.name === "News") {
            iconName = focused
              ? "ios-notifications-sharp"
              : "ios-notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exchanges" component={Exchanges} />
      <Tab.Screen name="Cryprocurrencies" component={Cryptocurrencies} />
      <Tab.Screen name="CryptoDetails" component={CryptoDetails} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

export default Tabs;
