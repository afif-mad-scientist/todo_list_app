import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form({ onAdd }) {
  const [text, settext] = useState("");
  const textHendler = (val) => {
    settext(val);
  };

  return (
    <View style={{ }}>
      <TextInput
        onChangeText={textHendler}
        placeholder="New todo ..."
        style={styles.input}
      />
      <Button title="ADD Todo" onPress={() => onAdd(text)} color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
