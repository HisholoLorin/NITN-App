import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    padding-horizontal: ${width * 0.05}px;
    padding-top: ${height * 0.12}px;
    padding-bottom: ${height * 0.05}px;
    border-bottom-right-radius: 30px;
    background-color: #001F54;
    marginBottom: ${height * 0.02}px;
`;

export const ProfilePicture = styled.Image`
    width: 90px;
    height: 90px;
    borderRadius: 50px;
`;

export const Bold = styled.Text`
    fontWeight : bold;
`;

export const Usertype = styled.Text`
    color: #fff;
`;