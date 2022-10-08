import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar as NativeStatusBar,
  AppRegistry,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <RestaurantScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: NativeStatusBar.currentHeight,
  },
});
