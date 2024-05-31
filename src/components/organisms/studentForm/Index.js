import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Button,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

// Components
import Title from "../../atoms/title/Index";
import Spacer from "../../atoms/spacer/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";

// Styled Components
import { FormContainer } from "./Styles";

// Redux
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../redux/user";

const { width, height } = Dimensions.get("window");

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const TrackingStatus = () => {
  const [activeIndex, setActive] = useState(0);

  const setActiveIndex = (val) => {
    LayoutAnimation.easeInEaseOut();
    setActive(val);
  };

  const status = ["Status 1", "Status 2", "Status 3", "Status 4"];
  const activeColor = "#EF9F27";
  const marginLeft = (100 / (status.length - 1)) * activeIndex - 100 + "%";

  return (
    <View style={styles.trackingStatusContainer}>
      <View style={styles.statusContainer}>
        <View style={styles.line}>
          <View style={[styles.activeLine, { marginLeft }]} />
        </View>
        {status.map((status, index) => (
          <View style={[styles.dot]} key={status}>
            <View
              style={[
                index <= activeIndex
                  ? { height: "100%", width: "100%" }
                  : { height: "40%", width: "40%" },
                { backgroundColor: activeColor, borderRadius: 20 },
              ]}
            />
          </View>
        ))}
        <View style={styles.labelContainer}>
          {status.map((status, index) => (
            <Text
              key={status}
              numberOfLines={1}
              style={[
                index % 2 == 0 ? { top: 20 } : { top: -20 },
                styles.trackingLabel,
              ]}
            >
              {status}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.btns}>
        <Button
          title="prev"
          onPress={() => setActiveIndex(activeIndex - 1)}
          disabled={activeIndex <= 0}
          color={"#6a0dad"}
        />
        <Button
          title="next"
          onPress={() => setActiveIndex(activeIndex + 1)}
          disabled={activeIndex >= status.length - 1}
          color={"#6a0dad"}
        />
      </View>
    </View>
  );
};
const StudentForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FormContainer style={styles.formContainer}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>UUID:</Text>
              <Text style={styles.value}>5678654</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Title:</Text>
              <Text style={styles.value}>Door</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Description:</Text>
              <Text style={styles.value}>Door hinge loose</Text>
            </View>

            <TrackingStatus />

            <View style={styles.row}>
              <Text style={styles.label}>Created at:</Text>
              <Text style={styles.value}>31 May, 2024</Text>
            </View>
          </View>
        </ScrollView>
      </FormContainer>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
  container: {
    padding: width * 0.05,
  },
  inputContainer: {
    marginBottom: height * 0.02,
    padding: width * 0.04,
    borderWidth: 1,
    borderColor: "#6a0dad",
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.01,
  },
  label: {
    fontSize: width * 0.045,
    color: "#333",
    fontWeight: "bold",
    marginRight: width * 0.02,
  },
  value: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: width * 0.02,
    fontSize: width * 0.045,
    backgroundColor: "#ccc",
    color: "#555",
  },

  // Styles for TrackingStatus
  trackingStatusContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginVertical: height * 0.02,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    justifyContent: "space-between",
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: "#ccc",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 5,
    width: "100%",
    backgroundColor: "#ccc",
    position: "absolute",
    borderRadius: 5,
    overflow: "hidden",
  },
  activeLine: {
    height: "100%",
    width: "100%",
    backgroundColor: "#EF9F27",
    borderRadius: 5,
  },
  btns: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  labelContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trackingLabel: {
    fontSize: 12,
  },
  prop: {
    marginBottom: 20,
    width: 100,
    textAlign: "center",
  },
});

export default StudentForm;
