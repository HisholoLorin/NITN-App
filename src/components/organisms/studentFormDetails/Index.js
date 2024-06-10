import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import StatusProgress from "./StatusProgress";

//Component
import Spacer from "../../atoms/spacer/Index";

//Styled
import { FormContainer } from "./Styles";
import Checkbox from "../../molecules/checkbox/Index";
import CustomRadio from "../../molecules/customRadio/Index";

const { width, height } = Dimensions.get("window");

const StudentFormDetails = ({ route }) => {
  const { userName, hostelName, title, description, stage } = route.params;

  return (
    <FormContainer>
      {userName && (
        <Spacer>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{userName}</Text>
        </Spacer>
      )}

      {hostelName && (
        <Spacer>
          <Text style={styles.label}>Hostel Name:</Text>
          <Text style={styles.value}>{hostelName}</Text>
        </Spacer>
      )}

      <Spacer>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{title}</Text>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{description}</Text>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Maintenance Progress:</Text>
        <View style={styles.checkboxContainer}>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
          <Checkbox label="Option 3" />
        </View>
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Status Progress:</Text>
        <StatusProgress stage={stage} />
      </Spacer>

      <Spacer>
        <Text style={styles.label}>Maintenance Progress:</Text>
        <View style={styles.radioContainer}>
          <CustomRadio label="Option 1" />
          <CustomRadio label="Option 2" />
          <CustomRadio label="Option 3" />
        </View>
      </Spacer>

    </FormContainer>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: "center",
    paddingTop: width * 0.05,
  },
  label: {
    fontSize: width * 0.045,
    color: "#333",
    fontWeight: "bold",
  },
  value: {
    fontSize: width * 0.045,
    color: "#555",
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default StudentFormDetails;
