import {
  createNavigationContainerRef,
  CommonActions,
} from "@react-navigation/native";
import { BackHandler } from "react-native";

// Creating a navigation reference
export const navigationRef = createNavigationContainerRef();

//Fuction to go back to previous screen
export const previousScreen = () => {
  navigationRef.canGoBack() ? navigationRef.goBack() : BackHandler.exitApp();
};

// Function to navigate to a screen
export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

// Function to reset the navigation stack to a specific screen
export const reset = (name, params) => {
  if (navigationRef.isReady()) {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    });
    navigationRef.dispatch(resetAction);
  }
};
