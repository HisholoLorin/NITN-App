import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const StickyNote = ({ date, note }) => {
  return (
    <View style={styles.stickyNoteContainer}>
      <Image
        source={require("../../../../assets/pin.png")}
        style={styles.pinImage}
      />
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stickyNoteContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#FF69B4",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    position: "relative", // Required to position the pin image
    marginBottom: height * 0.02,
    padding: width * 0.04,
    borderWidth: 1,


  },
  pinImage: {
    width: 30,
    height: 30,
    position: "absolute",
    top: -15, // Adjust based on your image and styling
    left: "50%",
    transform: [{ translateX: -15 }], // Center the image horizontally
  },
  dateText: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  noteText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});

export default StickyNote;
