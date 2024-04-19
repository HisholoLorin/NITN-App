import RootNavigation from "./src/navigations/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { MenuProvider } from "react-native-popup-menu";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Loader from "./src/components/atoms/Loader";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <MenuProvider>
            <Loader/>
            <RootNavigation />
          </MenuProvider>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
