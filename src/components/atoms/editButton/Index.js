import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EditButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingRight: 20 }}>
      <Text style={{fontSize : 18}}>Edit</Text>
    </TouchableOpacity>
  );
};

export default EditButton;
