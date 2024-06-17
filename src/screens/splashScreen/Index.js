import React, { useEffect } from "react";
import AppView from "../../components/atoms/AppView";
import { ImageBackground } from "react-native";

//Helper
import { reset } from "../../navigations/navigationRef";

const SplashScreen = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      reset("LocalLoginTrigger");
    }, 1500);

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts.
  }, []);

  return (
    <AppView {...props}>
      <ImageBackground
        source={require("../../../assets/splash.gif")}
        style={{ height: "100%" }}
      />
    </AppView>
  );
};

export default SplashScreen;