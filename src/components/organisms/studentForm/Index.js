import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";

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

const truncateText = (text, length = 10) => {
  return text.length > length ? text.substring(0, length) + "...." : text;
};

const StudentForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const animationRef = useRef(null);

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

  const combinedText = `Title: ${formData.title}\nDescription: ${truncateText(
    `${formData.description}`
  )}\nCreated at: ${formData.createdAt}`;
  const truncatedText = combinedText;

  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        animationRef.current.fadeInRight(500); // Adjust the duration as needed
      }
    }, [])
  );

  const handleDeleteForm = () => {
    Alert.alert("", "Are you sure you want to delete the form?", [
      {
        text: "Yes",
      },
      { text: "No" },
    ]);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <FormContainer style={styles.formContainer}>
        <Animatable.View
          ref={animationRef}
          animation="fadeInRight"
          useNativeDriver
        >
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
                <TouchableOpacity onPress={handleDeleteForm}>
                  <MaterialCommunityIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
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
    padding: width * 0.01,
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
    padding: 10,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default StudentForm;
