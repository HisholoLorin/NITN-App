//Components
import { Dimensions, StyleSheet, View } from "react-native";
import AppView from "../../../components/atoms/AppView";

const { width, height } = Dimensions.get("window");

const ContactScreen = (props) => {
  return (
    <AppView {...props}>
      <View style={styles.container}>
        <View style={styles.contactContainer}></View>
      </View>
    </AppView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.08,
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  contactContainer: {
    backgroundColor: "#ccc",
    padding: 100,
  },
});
