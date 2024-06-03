import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import StatusProgress from "./StatusProgress";

const { width, height } = Dimensions.get("window");

const StudentFormDetails = ({ route }) => {
  const {
    title = "No title provided",
    description = "No description provided",
    stage
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{description}</Text>

      <Text style={styles.label}>Status Progress:</Text>
      <StatusProgress stage={stage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#f8f8f8",
  },
  label: {
    fontSize: width * 0.045,
    color: "#333",
    fontWeight: "bold",
    marginTop: height * 0.02,
  },
  value: {
    fontSize: width * 0.045,
    color: "#555",
    marginTop: height * 0.01,
  },
});

export default StudentFormDetails;
