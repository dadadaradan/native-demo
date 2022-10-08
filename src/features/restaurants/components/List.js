import React from "react";
import { View, StyleSheet, Text } from "react-native";

const List = ({ restaurant = {} }) => {
  const {
    name = "Kebabnaya",
    icon,
    photos = [],
    address = "Str. Pacii",
    isOpenNow = true,
    rating = "5.00",
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 19,
  },
});

export default List;
