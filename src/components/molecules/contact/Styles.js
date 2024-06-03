import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ContactContainer = styled.View`
    backgroundColor: #fff;
    margin: ${height * 0.015}px;
    flexDirection: column;
    paddingHorizontal: ${width * 0.05}px;
    paddingVertical: ${width * 0.03}px;
    borderRadius: ${width * 0.03}px;
    shadowOpacity: 0.1;
    shadowRadius: ${width * 0.1}px;
    elevation: 5;
`;

export const SubContainer = styled.View`
    flexDirection: row;
    alignItems: center;
`;

export const IconContainer = styled.View`
    marginRight: ${width * 0.03}px;
    marginVertical: ${width * 0.015}px;
`;

export const Label = styled.Text`
    fontSize: ${width * 0.04}px;
    fontWeight: 500;
`;
