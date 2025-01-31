import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function HelloTouchableWithoutFeedback() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>!Hola React Native, Touchable Without Feedback.</Text>

      <TouchableWithoutFeedback
        onPress={() => {
          console.log("!Touchable Without Feedback OnPress.");
        }}
      >
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 30 },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10,
  },
});
