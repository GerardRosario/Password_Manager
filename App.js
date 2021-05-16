import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from 'react-redux'; 

import Home from "./Home";
import store from "./redux/store";

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Provider store={ store }>
          <Home />
          <StatusBar style="light" />
      </Provider>
    </NavigationContainer>
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
