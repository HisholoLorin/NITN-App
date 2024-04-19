import { useState } from "react";

//Components
import CustomCountryPicker from "../customCountryPicker/Index";
import Input from "../../atoms/input/Index";

import { MobileInputGroup, InputContainer } from "./Styles";

const MobileInput = (props) => {
  const {countryCode, setCountryCode} = props;
  return (
    <MobileInputGroup>
      <CustomCountryPicker value={countryCode} setValue={setCountryCode}/>
      <InputContainer>
        <Input
          {...props}
          autoCapitalize="none"
          keyboardType="phone-pad"
          label="Mobile number"
        />
      </InputContainer>
    </MobileInputGroup>
  );
};

export default MobileInput;
