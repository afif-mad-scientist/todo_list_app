import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Header from "./components/header.js";
import TodoItem from "./components/todoItem.js";
import Form from "./components/form.js";
import Flexbox from "./components/flexbox.js";

export default function App() {
  const [toDo, settoDo] = useState([]);

  const deleteTodo = (key) => {
    Alert.alert("Delete", "Are you sure you want delete the task ?", [
      {
        text: "yes, Of course",
        onPress: () => {
          settoDo((prevTodo) => {
            return prevTodo.filter((item) => item.key != key);
          });
        },
      },
      { text: "No" },
    ]);
  };

  const addTodo = (val) => {
    if (val != "") {
      settoDo((prevTodo) => {
        return [{ text: val, key: Math.random().toString() }, ...prevTodo];
      });
    }
  };

  return (
    // <Flexbox />

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form onAdd={addTodo} />
          <View style={styles.list}>
            <FlatList
              style={{ marginBottom: 20 }}
              data={toDo}
              renderItem={({ item }) => (
                <View>
                  <TodoItem item={item} onDelete={() => deleteTodo(item.key)} />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    paddingBottom: 10,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
