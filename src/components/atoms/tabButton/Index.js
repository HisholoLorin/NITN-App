import React from "react";

import { StyledTabButton, TabItemImage, TabItemText } from "./Styles";

const TabButton = (props) => {
  const { active, onPress, text, source } = props;
  return (
    <StyledTabButton active={active} onPress={onPress}>
      <TabItemImage source={source} />
      <TabItemText active={active}>{text}</TabItemText>
    </StyledTabButton>
  );
};

export default TabButton;
