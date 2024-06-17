import registerNNPushToken from 'native-notify';
import { APP_ID, APP_TOKEN } from './src/constant/notification';
import {  } from 'native-notify';

export const configureNotifications = () => {
  registerNNPushToken(APP_ID, APP_TOKEN);
};
