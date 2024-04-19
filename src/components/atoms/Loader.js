import { View, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

export default () => {
  const { loader } = useSelector((state) => state.ProcessReducer);
  if (loader)
    return (
      <View style={styles.loader}>
          <Image
            source={require("../../../assets/Loader/processing-circle.gif")}
            style={{ height: 70, width: 70 }}
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
    backgroundColor: "rgba(0,0,0,0.5)",
    height: Dimensions.get('window').height + 100,
    zIndex: 1,
  },
});
