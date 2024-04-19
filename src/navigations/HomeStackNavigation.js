import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Components
import BackButton from "../components/atoms/backButton/Index";
import DrawerButton from "../components/atoms/drawerButton/Index";

// Screens
import HomeScreen from "../screens/drawer/homeStack/HomeScreen";

//Helper
import { previousScreen } from "../navigations/navigationRef";

const HomeStack = createStackNavigator();

const HomeStackNavigation = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              image={userDetails?.image}
              onPress={() => navigation.openDrawer()}
            />
          ),
          title: "Members",
        }}
      />

    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
