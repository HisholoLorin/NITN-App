import { TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DrawerButton = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={{ paddingLeft: 20 }} onPress={onPress}>
      <MaterialIcons name="menu" size={30}/>
    </TouchableOpacity>
  );
};

export default DrawerButton;
