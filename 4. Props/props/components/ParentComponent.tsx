import { View, Text } from "react-native";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>
      <ChildComponent name="deepankar sah" role="Developer" age="20" />
    </View>
  );
};
export default ParentComponent;
