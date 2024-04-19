import styled from 'styled-components/native';

export const StyledTabButton = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: ${props => (props.active ? '4px' : '1px')};
  border-bottom-color: ${props => (props.active ? '#EF9F27' : '#BDBDBD')};
`;

export const TabItemText = styled.Text`
  color: ${props => (props.active ? '#4E2B69' : '#BDBDBD')};
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: ${props => (props.active ? '600' : '400')};;
`;