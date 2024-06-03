import React, { useState } from "react";
import {
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
  Dimensions,
} from "react-native";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const status = ["Status 1", "Status 2", "Status 3", "Status 4"];
const activeColor = "#6a0dad";
const { width, height } = Dimensions.get("window");

export default function TrackingStatus() {
  const [activeIndex, setActive] = useState(0);

  const setActiveIndex = (val) => {
    LayoutAnimation.easeInEaseOut();
    setActive(val);
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
            onPress={() => setActiveIndex(index)}
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
                index % 2 === 0 ? { top: 20 } : { top: -20 },
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
}

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
    fontSize: width * 0.03,
  },
});
