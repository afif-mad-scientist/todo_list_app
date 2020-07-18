import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Flexbox() {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, padding: 10, backgroundColor: "violet" }}>
        one
      </Text>
      <Text style={{ flex: 1, padding: 20, backgroundColor: "gold" }}>two</Text>
      <Text style={{ flex: 1, padding: 30, backgroundColor: "coral" }}>
        three
      </Text>
      <Text style={{ flex: 1, padding: 40, backgroundColor: "skyblue" }}>
        four
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 40,
    alignItems: "flex-end",
    backgroundColor: "grey",
  },
});
