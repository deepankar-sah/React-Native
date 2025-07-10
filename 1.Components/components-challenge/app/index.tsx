import Age from "@/components/Age";
import Name from "@/components/Name";
import SocialHandle from "@/components/SocialHandle";
import Subject from "@/components/Subject";
import { View } from "react-native";
const index = () => {
  return (
    <View>
      <Name />
      <Age />
      <SocialHandle />
      <Subject />
    </View>
  );
};
export default index;
