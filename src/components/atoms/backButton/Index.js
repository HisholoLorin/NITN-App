import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingLeft: 20 }}>
      <MaterialCommunityIcons name="arrow-left" size={32} color="#636363" />
    </TouchableOpacity>
  );
};

export default BackButton;
