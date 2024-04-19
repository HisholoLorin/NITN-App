import Input from '../../atoms/input/Index';

import {
    StyledIcon,
    InputContainer,
} from './Styles'


const NameInput = (props) => {
    return (
        <InputContainer>
            <StyledIcon name="account-outline" size={24} />
            <Input
                {...props}
                autoCapitalize="none"
                keyboardType="default"
                label='Fullname'
            />
        </InputContainer>
    );
};

export default NameInput;
