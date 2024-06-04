import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

//Styled
import { ContactContainer, SubContainer, IconContainer, Label } from "./Styles";
import { useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";

const Contact = ({ userName, mobileNo, department }) => {
  const animationRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        animationRef.current.slideInDown(); // Adjust the duration as needed
      }
    }, [])
  );

  return (
    <Animatable.View ref={animationRef} animation="slideInDown" useNativeDriver>
      <ContactContainer>
        <SubContainer>
          <IconContainer>
            <MaterialCommunityIcons name="account" size={20} color="#999" />
          </IconContainer>
          <Label>{userName}</Label>
        </SubContainer>

        <SubContainer>
          <IconContainer>
            <Entypo name="flow-tree" size={20} color="#999" />
          </IconContainer>
          <Label>{department}</Label>
        </SubContainer>

        <SubContainer>
          <IconContainer>
            <MaterialCommunityIcons name="phone" size={20} color="#999" />
          </IconContainer>
          <Label>+91 {mobileNo}</Label>
        </SubContainer>
      </ContactContainer>
    </Animatable.View>
  );
};

export default Contact;
