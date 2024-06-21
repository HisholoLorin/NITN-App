import RootNavigation from "./src/navigations/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { MenuProvider } from "react-native-popup-menu";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

//Component
import Loader from "./src/components/atoms/Loader";

//Helper
import { configureNotifications } from "./Notifications";

export default function App() {
  configureNotifications();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="black" />
      <Provider store={store}>
        <BottomSheetModalProvider>
          <MenuProvider>
            <Loader />
            <RootNavigation />
          </MenuProvider>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

// import {StatusBar} from "expo-status-bar";
// import {StyleSheet, Text, View, Alert} from "react-native";
// import messaging from "@react-native-firebase/messaging";
// import React, {useEffect} from "react";

// export default function App(){
//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//     if (enabled) {
//       console.log("Authorization status: ", authStatus)
//     }
//   }

//   useEffect(() => {
//     if (requestUserPermission()) {
//       messaging()
//         .getToken()
//         .then((token) => {
//           console.log(token)
//         })
//     }
//     else {
//       console.log("Permission not granted", authStatus)
//     }

//     //Check whether an initial notification is available
//     messaging()
//       .getInitialNotification()
//       .then(async (remoteMessage) => {
//         if (remoteMessage) {
//           console.log(
//             "Notification caused app to open from quit state",
//             remoteMessage.notification
//           )
//         }
//       })
//       //Assume a message-notification contains a "type" property in the data payload of the screen to open
//       messaging().onNotificationOpenedApp((remoteMessage) => {
//         console.log(
//           "Notification caused app to open from background state :",
//           remoteMessage.notification
//         )
//       })
//       //Register background handler
//       messaging().setBackgroundMessageHandler(async(remoteMessage) => {
//         console.log("Message handled in the background!", remoteMessage)
//       })

//       const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//         Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage))
//       })
//       return unsubscribe;
//   }, [])

//   return (
//     <View style={StyleSheet.container}>
//       <Text>FCM Tutorial</Text>
//       <StatusBar style="auto"/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })