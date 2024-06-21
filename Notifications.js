import registerNNPushToken from "native-notify";
import { APP_ID, APP_TOKEN } from "./src/constant/notification";
import * as Notifications from "expo-notifications";

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const configureNotifications = () => {
  registerNNPushToken(APP_ID, APP_TOKEN);
  // Listen for notifications received while app is in the foreground
  Notifications.addNotificationReceivedListener((notification) => {
    console.log("Notification received in foreground:", notification);
  });

  // Listen for notification responses
  Notifications.addNotificationResponseReceivedListener((response) => {
    console.log("Notification response received:", response);
  });
};
