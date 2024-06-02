import styled from 'styled-components/native';

export const TextContainer = styled.View`
  marginLeft: 7%;
  flexDirection: column;
  width : 60%;
  justifyContent: center;
`;

export const IconView = styled.View`
  height : 35px;
  width : 35px;
  backgroundColor : ${props => props?.backgroundColor};
  borderRadius : 20px;
  justifyContent : center;
`;