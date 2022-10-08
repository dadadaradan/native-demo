import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const Search = () => {
  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
});

export default Search;
