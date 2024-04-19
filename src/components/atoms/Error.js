import { Text, View, StyleSheet } from "react-native";

export default ({ children }) => {
  return (
      <Text style={styles.error}>{children}</Text>
  );
};
const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
