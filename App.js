import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import HelloTouchableWithoutFeedback from "./components/HelloTouchableWithoutFeedback";

export default function App() {
  return (
    <View style={styles.container}>
      <HelloTouchableWithoutFeedback />
      <StatusBar style="auto" />
    </View>
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
