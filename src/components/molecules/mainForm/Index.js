import React, { useCallback, useRef } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";

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
  title,
  description,
  timeSinceCreated,
  staged,
  navigation,
}) => {
  const animationRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        animationRef.current.bounceInRight(1000); // Adjust the duration as needed
      }
    }, [])
  );

  return (
    <Animatable.View
      ref={animationRef}
      animation="bounceInRight"
      useNativeDriver
      style={{padding : 5}}
    >
      <FormContainer
        onPress={() =>
          navigation.navigate("StudentFormDetails", {
            uuid,
            title,
            description,
          })
        }
      >
        <View>
          <Title>{title}</Title>
          <Description>{description && truncatedText(description)}</Description>
          <Date>{timeSinceCreated}</Date>
        </View>
        <IconContainer>
          <MaterialCommunityIcons name="delete" size={24} color="red" />
        </IconContainer>
      </FormContainer>
    </Animatable.View>
  );
};

export default MainForm;
