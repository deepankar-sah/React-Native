import { View, Text } from "react-native";
const DynamicContent = () => {
  const userName = "deepankar sah";
  const multiply = (a: number, b: number) => a * b;
  return (
    <View>
      <Text>my name is {userName}</Text>
      <Text>2 * 20 = {multiply(2, 20)}</Text>
    </View>
  );
};
export default DynamicContent;
