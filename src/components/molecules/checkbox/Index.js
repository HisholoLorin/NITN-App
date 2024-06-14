// CustomCheckBox.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { CheckBox } from "@rneui/themed";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";
import { Fontisto } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const AnimatedStrikeThroughText = ({ children, strikeThrough }) => {
  const strikeThroughAnim = useSharedValue(strikeThrough ? 1 : 0);

  React.useEffect(() => {
    strikeThroughAnim.value = withTiming(strikeThrough ? 1 : 0, {
      duration: 400,
      easing: Easing.linear,
    });
  }, [strikeThrough]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleX: strikeThroughAnim.value }],
    };
  });

  return (
    <View style={styles.textContainer}>
      <Text style={[styles.labelText, strikeThrough ? styles.strikeThroughText : null]}>
        {children}
      </Text>
      <Animated.View style={[styles.strikeThrough, animatedStyle]} />
    </View>
  );
};

const Checkbox = ({ label, value }) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        checked={isChecked}
        checkedIcon={
          <Fontisto
            name="checkbox-active"
            size={20}
            color="#F06449"
          />
        }
        uncheckedIcon={
          <Fontisto
            name="checkbox-passive"
            size={25}
            color="black"
          />
        }
        containerStyle={styles.checkboxContainer}
      />
      <TouchableOpacity activeOpacity={0.6}>
        <AnimatedStrikeThroughText strikeThrough={isChecked}>
          {label}
        </AnimatedStrikeThroughText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.02,
  },
  checkboxContainer: {
    padding: 0,
    margin: 0,
  },
  textContainer: {
    position: "relative",
  },
  labelText: {
    fontSize: width * 0.04,
    color: "black",
  },
  strikeThroughText: {
    color: "#ccc",
    fontSize: width * 0.035
  },
  strikeThrough: {
    position: "absolute",
    height: 1,
    backgroundColor: "#F06449",
    top: "50%",
    left: 0,
    right: 0,
  },
});

export default Checkbox;
