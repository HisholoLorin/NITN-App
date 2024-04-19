import React, { useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP, forgotPassword, signup } from "../../../redux/auth";

//Components
import PrimaryButton from "../../molecules/primaryButton/Index";
import OTPCodeInput from "../../molecules/otpCodeInput/Index";
import Title from "../../atoms/title/Index";
import SubTitle from "../../atoms/subTitle/Index";
import CountDownTimer from "../../atoms/CountDownTimer";
import Spacer from "../../atoms/spacer/Index";
import Error from "../../atoms/Error";

//Styled
import { FormContainer, EditContainer } from "./Styles";

const OTPForm = (props) => {
  const { navigation, route } = props;
  const { username, values, otpId, mode } = route.params;
  const [otp, setOTP] = useState(["", "", "", ""]);
  const dispatch = useDispatch();

  const verifyOTPAction = () => {
    dispatch(verifyOTP({ otpId, otp, mode }));
  };

  const { error } = useSelector((state) => state.AuthReducer);

  const resendOTP = () => {
    switch (mode) {
      case "ForgotPassword":
        dispatch(forgotPassword({ username }));
        break;
      case "Signup":
        dispatch(signup({ ...values }));
        break;
    }
    setOTP("");
  };

  return (
    <FormContainer>
      <Title>OTP Verification</Title>
      <SubTitle>Please enter the 4 digit OTP code sent to your email</SubTitle>
      <EditContainer
        onPress={() => navigation.goBack()}
        icon="pencil"
        text={values?.email || username}
        size={18}
      />
      <OTPCodeInput otp={otp} setOTP={setOTP} />
      <Spacer top={20} bottom={20}>
        <CountDownTimer timeInSeconds={10} resendOTP={resendOTP} />
      </Spacer>
      {error && <Error>{error}</Error>}
      <PrimaryButton text="Verify" onPress={verifyOTPAction} />
    </FormContainer>
  );
};

export default OTPForm;
