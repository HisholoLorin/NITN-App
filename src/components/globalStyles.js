import { StyleSheet, Dimensions } from "react-native";

export default globalStyles = StyleSheet.create({
  iconContainer: {
    width: "10%",
  },
});

export const IconStyle = ({
  iconSize,
  setIconColor,
  iconAlignment = "left",
}) => {
  return StyleSheet.create({
    fontSize: iconSize || 20,
    textAlign: iconAlignment,
    color: setIconColor || "#6C6C6C",
  });
};
