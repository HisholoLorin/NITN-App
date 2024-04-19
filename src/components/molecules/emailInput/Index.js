import Input from '../../atoms/input/Index';

import {
  StyledIcon,
  InputContainer,
} from './Styles'


const EmailInput = (props) => {
  return (
    <InputContainer>
      <StyledIcon name="email-outline" size={24} />
      <Input
        {...props}
        autoCapitalize="none"
        keyboardType="email-address"
        label='Email'
      />
    </InputContainer>
  );
};

export default EmailInput;
