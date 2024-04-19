import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default ({ timeInSeconds, resendOTP }) => {
  const [minutes, setMinutes] = useState(Math.floor(timeInSeconds / 60));
  const [seconds, setSeconds] = useState(timeInSeconds % 60);
  const [isTimeout, setIsTimeout] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(countDown, 1000);
    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalRef.current);
  }, [seconds]);

  const countDown = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else if (minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      clearInterval(intervalRef.current);
      setIsTimeout(true);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {!isTimeout ? (
        <View>
          <Text>
            Waiting for code in{" "}
            <Text style={{ color: "#EF9F27", fontWeight: "bold" }}>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>{" "}
          </Text>
        </View>
      ) : (
        <View>
          <Text>Didn't receive OTP?</Text>
          <TouchableOpacity onPress={resendOTP}>
            <Text
              style={{
                color: "#EF9F27",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // You can remove the styles.hide since display is controlled inline in the components
});
