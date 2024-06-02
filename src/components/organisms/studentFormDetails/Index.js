import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";

const { width, height } = Dimensions.get("window");

const StudentFormDetails = ({ route }) => {
  const { title, description } = route.params;

  const initialData = [
    { id: 1, title: "Status 1" },
    { id: 2, title: "Status 2" },
    { id: 3, title: "Status 3" },
    { id: 4, title: "Status 4" },
    { id: 5, title: "Status 5" },
  ];

  const [timelineData, setTimelineData] = useState(initialData);

  const handleStatusPress = (index) => {
    const updatedData = timelineData.map((item, i) => ({
      ...item,
      pressed: i <= index,
    }));
    setTimelineData(updatedData);
  };

  const renderDetail = (rowData, rowID) => {
    let title = <Text style={styles.title}>{rowData.title}</Text>;

    return (
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => handleStatusPress(parseInt(rowID))}
      >
        <View style={styles.detailContainer}>
          {title}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{description}</Text>

      <Text style={styles.label}>Status Progress:</Text>
      <Timeline
        data={timelineData}
        circleSize={20}
        circleColor="red"
        lineColor="red"
        timeContainerStyle={{ display: "none" }} // Hide the time on the left
        renderDetail={renderDetail}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 5,
  },
  touchableContainer: {
    flex: 1,
  },
});

export default StudentFormDetails;
