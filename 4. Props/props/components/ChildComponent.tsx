import { View, Text } from "react-native";

interface ChildProps {
  name: string;
  role: string;
  age: string;
}

const ChildComponent = ({ name, age, role }: ChildProps) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Role: {role}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};
export default ChildComponent;
