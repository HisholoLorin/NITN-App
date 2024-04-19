import {
  StyledTextInput,
  Label,
  InputGroup
} from './Styles'


const Input = (props) => {
  const {
    label,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    autoCapitalize,
    keyboardType,
    fontSize,
    textColor,
    secureTextEntry,
    maxLength,
    selection,
    contextMenuHidden = false,
  } = props;

  return (
      <InputGroup>
         <Label>{label ? label : 'password'}</Label>
        <StyledTextInput
           placeholder={placeholder}
           placeholderTextColor={placeholderTextColor}
           value={value}
           onChangeText={onChangeText}
           autoCapitalize={autoCapitalize}
           keyboardType={keyboardType}
           textColor={textColor}
           fontSize={fontSize}
           secureTextEntry={secureTextEntry}
           maxLength={maxLength}
           selection={selection}
           contextMenuHidden={contextMenuHidden}
        />
      </InputGroup>
  );
};

export default Input;
