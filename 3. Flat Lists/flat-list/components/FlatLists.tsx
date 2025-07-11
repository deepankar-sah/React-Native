import { View, Text, FlatList } from "react-native";

const FlatLists = () => {
  const fruits = ["apple", "banana", "mango"];

  return (
    <View>
      <FlatList
        data={fruits}
        renderItem={({ item }: { item: string }) => {
          return <Text>{item}</Text>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default FlatLists;
