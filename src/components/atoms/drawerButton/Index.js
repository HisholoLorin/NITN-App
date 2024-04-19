import { TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DrawerButton = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={{ paddingLeft: 20 }} onPress={onPress}>
      {/* <MaterialIcons name="menu" size={30} color="#636363" /> */}
      <Image
        source={
          image
            ? { uri: image }
            : require("../../../../assets/profilePhoto.jpg")
        }
        style={{
          height: 30,
          width: 30,
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default DrawerButton;
