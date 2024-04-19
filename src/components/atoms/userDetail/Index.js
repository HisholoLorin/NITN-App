import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const UserDetail = ({label, value }) => {
  return (
    <>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>
        {label.toUpperCase()}
      </Text>
      <View style={{ marginTop: "2%" }} />
      <Text style={{ color: "#6C6C6C" }}>{value}</Text>
    </>
  );
};

export default UserDetail;
