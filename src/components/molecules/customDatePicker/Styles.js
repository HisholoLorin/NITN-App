import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
    flexDirection: row;
    alignItems: center;
    borderWidth: 1px;
    borderColor: #ccc;
    borderRadius: ${width * 0.03}px;
    paddingVertical: ${height * 0.012}px;
    paddingHorizontal: ${width * 0.03}px;
    marginBottom: ${height * 0.03}px;
`;

export const TransparentBlock = styled.View`
    backgroundColor: rgba(255, 255, 255, 0.1);
    position: absolute;
    height: 100%;
    width: 100%;
    zIndex: 1;
`;