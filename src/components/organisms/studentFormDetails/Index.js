import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import StatusProgress from "./StatusProgress";

//Component
import Spacer from "../../atoms/spacer/Index";

//Styled
import { FormContainer } from "./Styles";

const { width, height } = Dimensions.get("window");

const StudentFormDetails = ({ route }) => {
  const {
    userName = "Empty",
    hostelName = "Empty",
    title = "No title provided",
    description = "No description provided",
    stage,
  } = route.params;

  return (
    <FormContainer>
      <Spacer>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{userName}</Text>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Hostel Name:</Text>
        <Text style={styles.value}>{hostelName}</Text>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{title}</Text>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{description}</Text>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Status Progress:</Text>
        <StatusProgress stage={stage} />
      </Spacer>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: width * 0.045,
    color: "#333",
    fontWeight: "bold",
  },
  value: {
    fontSize: width * 0.045,
    color: "#555",
  },
});

export default StudentFormDetails;
