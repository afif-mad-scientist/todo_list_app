import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 32,
    backgroundColor: "coral",
  },
  title: {
    marginHorizontal: 40,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
});
