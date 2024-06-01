import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Components
import Title from "../../atoms/title/Index";
import Spacer from "../../atoms/spacer/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";

// Styled Components
import { FormContainer } from "./Styles";

// Redux
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../redux/user";
import StickyNote from "./StickyNote";

const { width, height } = Dimensions.get("window");

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const truncateText = (text, length = 30) => {
  return text.length > length ? text.substring(0, length) + "...." : text;
};

const StudentForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handlePress = (title, description, createdAt) => {
    navigation.navigate("StudentFormDetails", {
      title,
      description,
      createdAt,
    });
  };

  const formData = {
    title: "Electric Switch",
    description: "Switch socket not working.",
    createdAt: "31 May, 2024",
  };

  const combinedText = `Title: ${formData.title}\n Description: ${formData.description}\n Created at: ${formData.createdAt}`;
  const truncatedText = truncateText(combinedText);

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
          <TouchableOpacity
            onPress={() =>
              handlePress(
                formData.title,
                formData.description,
                formData.createdAt
              )
            }
            style={styles.inputContainer}
          >
            <Text style={styles.value}>{truncatedText}</Text>
            <View style={styles.iconContainer}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
          </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  value: {
    fontSize: width * 0.045,
    color: "#555",
    flex: 1,
  },
  iconContainer: {
    marginLeft: width * 0.02,
  },
});

export default StudentForm;
