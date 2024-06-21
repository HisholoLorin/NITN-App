import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const FormEmpty = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.form}>No forms yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height : height * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: "ultralight",
    color: "#ccc",
  },
});
export default FormEmpty;
