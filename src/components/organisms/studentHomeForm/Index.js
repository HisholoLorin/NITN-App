import { useEffect, useState, useCallback, useRef } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

//Redux
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../redux/user";

const { width, height } = Dimensions.get("window");
const MAX_CHARACTERS = 50;

const StudentHomeForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const animationRef = useRef(null);

  useEffect(() => {
    dispatch(getUserDetails({ type: "student" }));
  }, []);

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
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  console.log(selectedItem);

  const toggleSelection = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        animationRef.current.fadeInUp(1300); // Adjust the duration as needed
      }
    }, [])
  );

  const handleIssueComplain = () => {
    if (selectedItem) {
      setModalVisible(true);
    } else {
      alert("Please select an item first.");
    }
  };

  const handleSend = () => {
    console.log("Title:", selectedItem);
    console.log("Description:", description);
    setModalVisible(false);
    setDescription("");
  };

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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
              <TouchableWithoutFeedback>
                <View style={styles.modalView}>
                  <Text style={styles.modalTitle}>Issue Complain</Text>
                  <TextInput
                    style={styles.input}
                    value={selectedItem}
                    editable={false}
                  />

                  <Text style={styles.charCount}>
                    Maximum Characters: {MAX_CHARACTERS - description.length}
                  </Text>

                  <TextInput
                    style={styles.textArea}
                    placeholder="Description"
                    placeholderTextColor="#999"
                    multiline
                    numberOfLines={4}
                    maxLength={MAX_CHARACTERS}
                    value={description}
                    onChangeText={setDescription}
                  />

                  <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>Send</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
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

  /* Modal */

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.08,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: width * 0.9, 
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: height * 0.02,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: height * 0.05,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.025,
    marginBottom: height * 0.03,
  },
  textArea: {
    height: height * 0.1,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.025,
    marginBottom: height * 0.03,
  },
  button: {
    backgroundColor: "#6a0dad",
    borderRadius: 10,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.03,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  charCount: {
    alignSelf: "flex-start",
    marginBottom: height * 0.01,
    color: "grey",}
});

export default StudentHomeForm;
