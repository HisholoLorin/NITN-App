import React from "react";
import { Image } from "react-native";

import { StyledTabButton, TabItem } from "./Styles";

const TabButton = (props) => {
  const { active, onPress, text, image } = props;
  return (
    <StyledTabButton active={active} onPress={onPress}>
      <Image source={require(image)} height={50} width={50} />
      <TabItem active={active}>{text}</TabItem>
    </StyledTabButton>
  );
};

export default TabButton;
