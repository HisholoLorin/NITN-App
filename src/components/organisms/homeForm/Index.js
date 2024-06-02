import { useCallback, useState, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

//Components
import Title from "../../atoms/title/Index";
import Spacer from "../../atoms/spacer/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";

//Styled Components
import { FormContainer } from "./Styles";

//Redux
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../redux/user";

const { width, height } = Dimensions.get("window");

const HomeForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const animationRef = useRef(null);

  const CustomCheckBox = ({ isChecked, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.checkBoxContainer}>
        <View style={[styles.checkBox, isChecked && styles.checked]}>
          {isChecked && <Ionicons name="checkmark" size={15} color="white" />}
        </View>
      </TouchableOpacity>
    );
  };

  const GridItem = ({ item, selected, toggleSelection }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => toggleSelection(item.name)}
    >
      <View style={styles.checkBoxWrapper}>
        <CustomCheckBox
          isChecked={selected}
          onPress={() => toggleSelection(item.name)}
        />
      </View>
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.gridText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const items = [
    {
      name: "Door",
      label: "Door",
      image: require("../../../../assets/door.png"),
    },
    {
      name: "Electric Switch",
      label: "Electric Switch",
      image: require("../../../../assets/electric switch.png"),
    },
    {
      name: "Geyser",
      label: "Geyser",
      image: require("../../../../assets/geyser.png"),
    },
    {
      name: "Plumbing",
      label: "Plumbing",
      image: require("../../../../assets/plumbing.png"),
    },
    {
      name: "Water Filter",
      label: "Water Filter",
      image: require("../../../../assets/water filter.png"),
    },
    {
      name: "Water Tap",
      label: "Water Tap",
      image: require("../../../../assets/water-tap.png"),
    },
    {
      name: "Window",
      label: "Window",
      image: require("../../../../assets/window.png"),
    },
    {
      name: "Tubelight",
      label: "Tubelight",
      image: require("../../../../assets/tubelight.png"),
    },
    {
      name: "Others",
      label: "Others",
      image: require("../../../../assets/others.png"),
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(selectedItem)

  const toggleSelection = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleIssueComplain = () => {
    if (selectedItem) {
      setModalVisible(true);
    } else {
      alert("Please select an item first.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        animationRef.current.fadeInUp(1300); // Adjust the duration as needed
      }
    }, [])
  );

  return (
    <>
      <View style={styles.container}>
        <Animatable.View ref={animationRef} animation="fadeInUp" useNativeDriver>
          <ScrollView contentContainerStyle={styles.grid}>
            {items.map((item) => (
              <GridItem
                key={item.name}
                item={item}
                selected={selectedItem === item.name}
                toggleSelection={toggleSelection}
              />
            ))}
          </ScrollView>
        </Animatable.View>

        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          useNativeDriver
          style={{
            position: "absolute",
            bottom: width * 0.1,
            right: width * 0.1,
          }}
        >
          <TouchableOpacity
            onPress={handleIssueComplain}
            style={styles.issueComplainButton}
          >
            <Text style={styles.issueComplainText}>Issue Complain</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  /* Check Box */
  checkBoxContainer: {
    padding: width * 0.02,
  },
  checkBox: {
    width: width * 0.05,
    height: width * 0.05,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#000",
  },
  checkBoxWrapper: {
    position: "absolute",
    top: width * 0.01,
    left: width * 0.01,
    zIndex: 1,
  },

  /* Grid Item */
  container: {
    flex: 1,
    borderRadius: width * 0.05,
    overflow: "hidden",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    width: width * 0.3,
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.03,
    borderRadius: width * 0.035,
    marginVertical: height * 0.015,
    shadowOpacity: 0.1,
    shadowRadius: width * 0.1,
    elevation: 5,
    paddingTop: height * 0.05,
    backgroundColor: "#fff",
  },
  icon: {
    width: width * 0.2,
    height: width * 0.2,
    marginBottom: height * 0.01,
  },
  gridText: {
    fontSize: width * 0.035,
    textAlign: "center",
  },

  /* Issue Complain Button*/
  issueComplainButton: {
    backgroundColor: "#6a0dad",
    padding: width * 0.05,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: width * 0.1,
    elevation: 5,
  },
  issueComplainText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});

export default HomeForm;
