import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

export const Account = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onSelectAccount(props.account);
      }}
    >
      <View style={styles.accountContainer}></View>
    </TouchableOpacity>
  );
};

export const FlatListAccounts = (props) => {
  const renderItem = ({ item }) => (
    <Account account={item} onSelectAccount={props.onSelectAccount} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.accountName}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});
