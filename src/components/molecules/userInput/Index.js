import Input from '../../atoms/input/Index';

import {
    StyledIcon,
    InputContainer,
} from './Styles'


const UserInput = (props) => {
    return (
        <InputContainer>
            <StyledIcon name="account-outline" size={25} />
            <Input
                {...props}
                autoCapitalize="none"
                keyboardType="default"
                label='User'
            />
        </InputContainer>
    );
};

export default UserInput;
