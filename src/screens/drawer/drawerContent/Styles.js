import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const LogoutButton = styled(TouchableOpacity)`
    position: absolute;
    bottom: 0px;
`;
export const LogoutContainer = styled.View`
    margin: 20px 20px;
    flex-direction : row;
`;

export const Logout = styled.Text`
    margin-left : 15%;
    color: red;
    font-size: 16px;
    
`;