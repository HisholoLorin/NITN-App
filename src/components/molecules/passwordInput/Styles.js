import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const StyledIcon = styled(MaterialCommunityIcons)`
  color: ${props => props.iconColor || '#6C6C6C'};
  margin-top: 14px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #D1D1D1;
  border-radius: 18px;
  padding: 15px;
  margin-bottom: 15px;
`;
