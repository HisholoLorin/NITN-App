import styled from "styled-components/native";

export const StyledTabButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 10px;
  border-radius: 10px;
  border-width: ${(props) => (props.active ? "4px" : "1px")};
  border-color: ${(props) => (props.active ? "#EF9F27" : "#BDBDBD")};
`;

export const TabItemImage = styled.Image`
  margin-Top: 10px;
  height: 50px;
  width: 50px;
`;

export const TabItemText = styled.Text`
  color: ${(props) => (props.active ? "#4E2B69" : "#BDBDBD")};
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
`;
