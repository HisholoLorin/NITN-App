import { View, Text, TouchableOpacity } from "react-native";
import Spacer from "../../atoms/spacer/Index";

const IconLabelButton = ({ label, icon, onPress }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row" }}>
        <View style={globalStyles.iconContainer}>{icon()}</View>
        <Text style={{color : "#6C6C6C"}}>{label}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

export default IconLabelButton;
