import { View, Text, StyleSheet } from "react-native";

const FormEmpty = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.form}>No forms yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex:1,
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
