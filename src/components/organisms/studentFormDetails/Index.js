import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import StatusProgress from "./StatusProgress";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Component
import Spacer from "../../atoms/spacer/Index";

//Styled
import { FormContainer } from "./Styles";
import Checkbox from "../../molecules/checkbox/Index";
import CustomRadio from "../../molecules/customRadio/Index";

const { width, height } = Dimensions.get("window");

//Helper
import { getStageNumber } from "../../../helper/getStageNumber";

const StudentFormDetails = ({ route }) => {
  const {
    userName,
    hostelName,
    title,
    description,
    stage,
    mobileNo,
    stageUuid,
  } = route.params;
  const maintenanceStages = [false, false, false];
  let currentMaintenanceStage = getStageNumber(stage) - 1;
  if (currentMaintenanceStage > 3) currentMaintenanceStage = 3;
  for (let i = 0; i < currentMaintenanceStage; i++) maintenanceStages[i] = true;

  const [usertype, getUsertype] = useState(null);
  useEffect(() => {
    const getRole = async () => {
      const role = await AsyncStorage.getItem("UserType");
      getUsertype(role);
    };
    getRole();
  }, []);
  return (
    usertype && (
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

        {mobileNo && (
          <Spacer>
            <Text style={styles.label}>Mobile Number:</Text>
            <Text style={styles.value}>{mobileNo}</Text>
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

        {/* {usertype == "management" && (
          <Spacer>
            <Text style={styles.label}>Maintenance Progress:</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox label="Received" value={maintenanceStages[0]} />
              <Checkbox label="Dispatched" value={maintenanceStages[1]} />
              <Checkbox label="Completed" value={maintenanceStages[2]} />
            </View>
          </Spacer>
        )} */}

        <Spacer>
          <Text style={styles.label}>Status Progress:</Text>
          <StatusProgress
            stage={stage}
            usertype={usertype}
            stageUuid={stageUuid}
          />
        </Spacer>

        {/* <Spacer>
          <Text style={styles.label}>Maintenance Progress:</Text>
          <View style={styles.radioContainer}>
            <CustomRadio
              label="Received"
              value={maintenanceStages[0]}
              stageUuid={stageUuid}
              stage={2}
            />
            <CustomRadio
              label="Dispatched"
              value={maintenanceStages[1]}
              stageUuid={stageUuid}
              stage={3}
            />
            <CustomRadio
              label="Completed"
              value={maintenanceStages[2]}
              stageUuid={stageUuid}
              stage={4}
            />
          </View>
        </Spacer> */}
      </FormContainer>
    )
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
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default StudentFormDetails;
