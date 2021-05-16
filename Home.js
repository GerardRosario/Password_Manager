import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import BrowserAccountScreen from "./screens/BrowserAccountScreen";
import AccountDetailsScreen from "./screens/AccountDetailsScreen";
import LoginScreen from "./screens/LoginScreen";


const Stack = createStackNavigator();

const StackStructure = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen name="Account Manager" component={LoginScreen} />
      <Stack.Screen name="My Accounts" component={BrowserAccountScreen} />
      <Stack.Screen name="Account Details" component={AccountDetailsScreen} />
    </Stack.Navigator>
  );
};

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackStructure />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
