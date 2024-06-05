import { View, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

export default () => {
  const { loader } = useSelector((state) => state.ProcessReducer);
  if (loader)
    return (
      <View style={styles.loader}>
          <Image
            source={require("../../../assets/Loader/Dots Loader.gif")}
            style={{ height: 100, width: 100 }}
          />
      </View>
    );
  else return null;
};

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    height: Dimensions.get('window').height + 100,
    zIndex: 1,
  },
});
