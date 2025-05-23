import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// Helper
import { getStageNumber } from "../../../helper/getStageNumber";

// Redux
import { useDispatch } from "react-redux";
import { updateStage } from "../../../redux/form";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const status = ["Issued", "         Received", "      Dispatched", "Completed"];
const activeColor = "#F06449";
const { width, height } = Dimensions.get("window");

export default ({ stage, usertype, stageUuid }) => {
  const dispatch = useDispatch();
  const stageNumber = getStageNumber(stage) - 1;
  const [activeIndex, setActive] = useState(stageNumber);
  const setActiveIndex = (val) => {
    LayoutAnimation.easeInEaseOut();
    setActive(val);
    dispatch(updateStage({ stageUuid, stage: val+1}));
  };

  const marginLeft = (100 / (status.length - 1)) * activeIndex - 100 + "%";

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <View style={styles.line}>
          <View style={[styles.activeLine, { marginLeft }]} />
        </View>
        {status.map((status, index) => (
          <TouchableOpacity
            key={status}
            onPress={() => usertype != "student" && setActiveIndex(index)}
            style={styles.dot}
          >
            <View
              style={[
                index <= activeIndex
                  ? { height: "100%", width: "100%" }
                  : { height: "40%", width: "40%" },
                { backgroundColor: activeColor, borderRadius: 20 },
              ]}
            />
          </TouchableOpacity>
        ))}
        <View style={styles.labelContainer}>
          {status.map((status, index) => (
            <Text
              key={status}
              numberOfLines={1}
              style={[
                index % 2 === 0 ? { top: 30 } : { top: -30 },
                styles.label,
              ]}
            >
              {status}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
    marginVertical: height * 0.04,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: height * 0.06,
    justifyContent: "space-between",
  },
  dot: {
    height: width * 0.055,
    width: width * 0.055,
    borderRadius: 100,
    backgroundColor: "#ccc",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: width * 0.015,
    width: "100%",
    backgroundColor: "#ccc",
    position: "absolute",
    borderRadius: 5,
    overflow: "hidden",
  },
  activeLine: {
    height: "100%",
    width: "100%",
    backgroundColor: activeColor,
    borderRadius: 5,
  },
  labelContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: width * 0.035,
  },
});
