import React, { useState, useRef, useEffect } from "react";
import { InputContainer, NumberInput } from "./Styles"
import { Keyboard } from "react-native";

const OTPCodeInput = ({otp, setOTP}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRefs = useRef([]);

    useEffect(() => {
        // When the component mounts, focus on the input field
        Keyboard.dismiss();
        setTimeout(() => {
            inputRefs.current[0].focus();
        }, 300); 
    }, []); // Empty dependency array ensures this runs only once on mount


    const handleInputChange = (text, index) => {
        const updateOTP = (newOTP) => {
            setOTP(newOTP);
            setActiveIndex(index);
        };

        const focusInput = (nextIndex) => {
            if (nextIndex >= 0 && nextIndex < otp.length) {
                inputRefs.current[nextIndex]?.focus();
                setActiveIndex(nextIndex);
            }
        };

        const newOTP = [...otp];
        newOTP[index] = text;
        updateOTP(newOTP);

        text === "" ? focusInput(index - 1) : focusInput(index + 1);
    };

    const handleKeyPress = (event, index) => {
        const focusInput = (nextIndex) => {
            if (nextIndex >= 0 && nextIndex < otp.length) {
                inputRefs.current[nextIndex]?.focus();
                setActiveIndex(nextIndex);
            }
        };
    
        const isBackspace = event.nativeEvent.key === "Backspace";
        const hasEmptyNext = index < otp.length - 1 && !otp[index + 1];
    
        isBackspace ? focusInput(index - 1) : focusInput(hasEmptyNext ? index + 1 : index);
    };

    return (
        <InputContainer>
            {otp.map((input, index) => (
                <NumberInput
                    index={index}
                    activeIndex={activeIndex}
                    otp={otp}
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    maxLength={1}
                    value={input}
                    onChangeText={(text) => handleInputChange(text, index)}
                    onKeyPress={(event) => handleKeyPress(event, index)}
                    keyboardType="number-pad"
                    editable={true}
                    selectTextOnFocus={true}
                    onSubmitEditing={() => { }}
                />
            ))}
        </InputContainer>
    );
};

export default OTPCodeInput;
