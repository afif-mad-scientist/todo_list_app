import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, onDelete }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={{ paddingRight: 10 }} onPress={onDelete}>
        <MaterialIcons size={25} name="delete" color="coral" />
      </TouchableOpacity>
      <Text>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#777",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
});
