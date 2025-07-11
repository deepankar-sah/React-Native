import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
const index = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/184107732?v=4&size=64",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Deepankar Sah</Text>
      <Text style={styles.job}>Designer, Developer and Content Creator</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Follow me</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 100,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    elevation: 5,
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  job: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
