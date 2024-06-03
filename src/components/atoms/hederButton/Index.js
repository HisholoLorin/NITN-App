import React from "react";
import { TouchableOpacity, Text } from "react-native";

const HeaderButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingRight: 20 }}>
      <Text style={{fontSize : 18}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
