//Components
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppView from "../../../components/atoms/AppView";
import * as Animatable from "react-native-animatable";

const { width, height } = Dimensions.get("window");

const ContactScreen = (props) => {
  return (
    <AppView {...props}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.contactContainer}>
            <Image
              source={require("../../../../assets/profile.png")}
              style={styles.image}
            />
            <Text style={styles.text}>
              Electrician <Text style={styles.contact}>0912837465</Text>
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <Image
              source={require("../../../../assets/profile.png")}
              style={styles.image}
            />
            <Text style={styles.text}>
              Electrician <Text style={styles.contact}>0912837465</Text>
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <Image
              source={require("../../../../assets/profile.png")}
              style={styles.image}
            />
            <Text style={styles.text}>
              Electrician <Text style={styles.contact}>0912837465</Text>
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <Image
              source={require("../../../../assets/profile.png")}
              style={styles.image}
            />
            <Text style={styles.text}>
              Electrician <Text style={styles.contact}>0912837465</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </AppView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: width * 0.05,
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  contactContainer: {
    backgroundColor: "#fff",
    marginVertical: height * 0.015,
    width: width * 0.4,
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.03,
    borderRadius: width * 0.03,
    shadowOpacity: 0.1,
    shadowRadius: width * 0.1,
    elevation: 5,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 100,
    marginBottom: height * 0.01,
  },
  text: {
    fontSize: width * 0.035,
    textAlign: "center",
  },
  contact: {
    fontSize: width * 0.04,
    textAlign: "center",
    fontWeight: "bold",
  },
});
