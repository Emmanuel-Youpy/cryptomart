import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import ScreenNav from "./navigation/ScreenNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/Tabs";
import store from "./app/store";
import { Provider } from "react-redux";
import CryptocurrenciesAll from "./screens/CryptocurrenciesAll";
import NewsAll from "./screens/NewsAll";
import CryptoDetails from "./screens/CryptoDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CryptocurrenciesAll"
              component={CryptocurrenciesAll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewsAll"
              component={NewsAll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CryptoDetails"
              component={CryptoDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
