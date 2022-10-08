import React from "react";
import { View, StyleSheet } from "react-native";
import Search from "../components/Search";
import List from "../components/List";

export const RestaurantScreen = () => {
  return (
    <View style={styles.container}>
      <Search />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
