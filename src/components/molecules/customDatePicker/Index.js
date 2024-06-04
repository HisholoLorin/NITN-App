import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

//Styled Components
import { Container, TransparentBlock } from "./Styles";
import Input from "../../atoms/input/Index";

//Helper
import { convertToShortDateFormat } from "../../../helper/dateTimeFormats";

const CustomDatePicker = ({ state, setState, edit }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    // Format the date as needed (e.g., YYYY-MM-DD)
    const formattedDate = currentDate.toISOString().split("T")[0];
    setState(convertToShortDateFormat(formattedDate));
  };
  return (
    <Container>
      <FontAwesome name="calendar" size={20} color="#999" />
      {edit === false && <TransparentBlock />}
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Input
          placeholder="Date of Birth"
          value={state}
          editable={false}
          color={edit === false ? "#999" : "#000"}
        />

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default CustomDatePicker;
