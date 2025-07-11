import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const index = () => {
  const [text, setText] = useState("");

  type Task = { id: string; text: string };

  const [taskList, setTaskList] = useState<Task[]>([]);

  console.log(taskList);

  // add task function
  const handleAddTask = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now().toString(),
      text: text,
    };

    setTaskList([...taskList, newTask]);
    setText("");
  };

  // delete task function

  const handleDelete = (id: string) => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your tasks"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity
              style={styles.delBtn}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.buttonText}>Delete task</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "teal",
    padding: 12,
    alignContent: "center",
    borderRadius: 8,
    marginBottom: 20,
  },

  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },

  taskText: {
    fontSize: 16,
  },

  delBtn: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 6,
  },

  buttonText: {
    color: "white",
  },
});
