import React, { useRef } from "react";
import {
  Animated,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import {styles} from "./Styles"
import AsyncStorage from "@react-native-async-storage/async-storage";

//helper
import { reset } from "../../navigations/navigationRef";

const { width } = Dimensions.get("window");

const data = [
  {
    color: "#FF6500",
    animation: require("../../../assets/lottie/pervasive.json"),
    title: "Complaint Forms at Your Fingertips",
    text: "Quickly and conveniently issue complaint forms from the comfort of your own room.",
  },
  {
    color: "#FF5580",
    animation: require("../../../assets/lottie/form.json"),
    title: "Organizing and Maintaining Forms",
    text: "Effortlessly manage and maintain your forms with automated systems and easy-to-use interfaces.",
  },
  {
    color: "#711DB0",
    animation: require("../../../assets/lottie/tracker.json"),
    title: "Monitoring Your Form Status",
    text: "Stay updated on the progress and status of your forms in real-time.",
  },
  {
    color: "#FFD23F",
    animation: require("../../../assets/lottie/final.json"),
    title: "Welcome to the app!",
    text: "Proceed on your journey to keep the hostel at its peak condition.",
  },
];

function Swiper({ navigation }) {
  const scrollValue = useRef(new Animated.Value(0)).current;

  const handlePress = async() => {
    await AsyncStorage.setItem("IntroShown", "True");
    reset("Login")
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false }
        )}
      >
        {data.map((item, index) => (
          <View style={[styles.card]} key={index}>
            <LottieView
              source={item.animation}
              autoPlay
              loop
              style={styles.animation}
            />
            <View
              style={[styles.textContainer, { backgroundColor: item.color }]}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
              {index === data.length - 1 && (
                <TouchableOpacity
                  style={styles.getStarted}
                  onPress={handlePress}
                >
                  <Text style={styles.final}>Get Started</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer} pointerEvents="none">
        {data.map((_, i) => (
          <Indicator i={i} key={i} scrollValue={scrollValue} />
        ))}
      </View>
    </View>
  );
}

function Indicator({ i, scrollValue }) {
  const translateX = scrollValue.interpolate({
    inputRange: [-width + i * width, i * width, width + i * width],
    outputRange: [-20, 0, 20],
  });
  return (
    <View style={styles.indicator}>
      <Animated.View
        style={[styles.activeIndicator, { transform: [{ translateX }] }]}
      />
    </View>
  );
}

export default Swiper;
