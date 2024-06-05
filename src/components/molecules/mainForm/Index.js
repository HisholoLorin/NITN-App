import React, { useCallback, useRef } from "react";
import { View, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";

//Redux
import { useDispatch } from "react-redux";
import { deleteForm } from "../../../redux/form";

//Styled
import {
  FormContainer,
  IconContainer,
  Title,
  Description,
  Date,
} from "./Styles";

const truncatedText = (text, length = 30) => {
  return text.length > length ? text.substring(0, length) + "...." : text;
};

const MainForm = ({
  uuid,
  userName,
  hostelName,
  title,
  description,
  timeSinceCreated,
  stage,
  navigation,
  hasDeleteOption,
}) => {
  const dispatch = useDispatch();

  const animationRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        animationRef.current.bounceInRight(1000); // Adjust the duration as needed
      }
    }, [])
  );

  const handleDelete = () => {
    Alert.alert("", "Are you sure you want to delete this form?", [
      {
        text: "Yes",
        onPress: () => {
          dispatch(deleteForm({ uuid }));
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <Animatable.View
      ref={animationRef}
      animation="bounceInRight"
      useNativeDriver
      style={{ padding: 5 }}
    >
      <FormContainer
        onPress={() =>
          navigation.navigate("StudentFormDetails", {
            userName,
            hostelName,
            title,
            description,
            stage,
          })
        }
      >
        <View>
          <Title>{title}</Title>
          <Description>{description && truncatedText(description)}</Description>
          <Date>{timeSinceCreated}</Date>
        </View>
        {hasDeleteOption && <IconContainer onPress={handleDelete}>
          <MaterialCommunityIcons name="delete" size={24} color="red" />
        </IconContainer>}
      </FormContainer>
    </Animatable.View>
  );
};

export default MainForm;
