import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Components
import AppView from "../../../components/atoms/AppView";

const { width, height } = Dimensions.get("window");

const AboutScreen = (props) => {
  return (
    <AppView {...props}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.appContainer}>
          <Image
            source={require("../../../../assets/NITN_Logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>Application Name</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            <Ionicons
              name="information-circle-outline"
              size={28}
              color="#4CAF50"
              style={styles.icon}
            />
            <Text style={styles.title}>About the App</Text>
          </View>
          <Text style={styles.text}>
            Welcome to our mobile application designed to assist students in
            handling repair issues in their hostel rooms. Whether it's
            electrical appliances, plumbing, or other maintenance needs, our app
            provides a convenient way for students to report these issues
            without having to leave their rooms.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Ionicons
              name="list-outline"
              size={28}
              color="#4CAF50"
              style={styles.icon}
            />
            <Text style={styles.title}>Features</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureTextContainer}>
              <View style={styles.row}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={22}
                  color="#4CAF50"
                  style={styles.subIcon}
                />
                <Text style={styles.subtitle}>Report Issues Easily</Text>
              </View>
              <Text style={styles.text}>
                Students can easily report any issues with their hostel
                facilities directly through the app. Whether it's a broken
                electrical switch or a plumbing problem, our app ensures that
                the report reaches the management promptly.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureTextContainer}>
              <View style={styles.row}>
                <Ionicons
                  name="people-outline"
                  size={22}
                  color="#4CAF50"
                  style={styles.subIcon}
                />
                <Text style={styles.subtitle}>Contact Management Staff</Text>
              </View>
              <Text style={styles.text}>
                The app provides a comprehensive contact list of management
                staff, including electricians, plumbers, and other relevant
                personnel, along with their contact information.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureTextContainer}>
              <View style={styles.row}>
                <Ionicons
                  name="time-outline"
                  size={22}
                  color="#4CAF50"
                  style={styles.subIcon}
                />
                <Text style={styles.subtitle}>Track Issue Progress</Text>
              </View>
              <Text style={styles.text}>
                Students can check the progress of their reported issues to see
                if they have been processed.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureTextContainer}>
              <View style={styles.row}>
                <Ionicons
                  name="business-outline"
                  size={22}
                  color="#4CAF50"
                  style={styles.subIcon}
                />
                <Text style={styles.subtitle}>Management Portal</Text>
              </View>
              <Text style={styles.text}>
                The management can view and manage all the forms sent to their
                respective departments.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Ionicons
              name="call-outline"
              size={28}
              color="#4CAF50"
              style={styles.icon}
            />
            <Text style={styles.title}>Contact Us</Text>
          </View>
          <Text style={styles.text}>
            If you have any questions or need further assistance, please do not
            hesitate to contact us through the app's contact list or visit our
            support center.
          </Text>
        </View>
        <Text style={styles.footer}>Version 1.0.0</Text>
      </ScrollView>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  appContainer: {
    padding: width * 0.04,
    alignItems: "center",
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: width * 0.045
  },
  appName: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    marginBottom: width * 0.02
  },
  section: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
    padding: width * 0.04,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.01,
  },
  icon: {
    marginRight: width * 0.03,
  },
  subIcon: {
    marginRight: width * 0.03,
    marginTop: width * 0.03,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: width * 0.05,
    fontWeight: "600",
    color: "#555",
    marginTop: height * 0.015,
  },
  text: {
    fontSize: width * 0.04,
    color: "#555",
    lineHeight: width * 0.07,
    marginBottom: height * 0.01,
    paddingLeft: width * 0.05,
  },
  bulletPoint: {
    fontSize: width * 0.045,
    color: "#555",
    marginLeft: width * 0.05,
    marginBottom: height * 0.005,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: height * 0.01,
  },
  featureTextContainer: {
    marginLeft: width * 0.03,
    flex: 1,
  },
  footer: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontStyle: "italic",
    marginBottom: width * 0.035,
  },
});

export default AboutScreen;
