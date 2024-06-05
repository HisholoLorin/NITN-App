import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ProfileScreen from "../screens/drawer/profileStack/ProfileScreen";

//Components
import BackButton from "../components/atoms/backButton/Index";
import HeaderButton from "../components/atoms/hederButton/Index";

//helper
import { previousScreen } from "./navigationRef";

//Redux
import { useSelector, useDispatch } from "react-redux";
import user, { setEdit } from "../redux/user";

const ProfileStack = createStackNavigator();

const ProfileStackNavigation = () => {
  const { edit } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackTitleVisible: true, // Hide the default back button title
        headerLeft: () => <BackButton onPress={previousScreen} />,
        headerRight: () =>
          edit ? (
            <HeaderButton
              text="Cancel"
              onPress={() => dispatch(setEdit(false))}
            />
          ) : (
            <HeaderButton text="Edit" onPress={() => dispatch(setEdit(true))} />
          ),
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigation;
