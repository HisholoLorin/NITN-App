import React from "react";
import styled from "styled-components";

//Helper
import { clearTempListener } from "../../helper/clearTemp";

const AppView = (props) => {
  clearTempListener({ navigation : props.navigation }); //Clearing the error message on focus
  return <View style={props.style}>{props.children}</View>;
};

const View = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default AppView;
