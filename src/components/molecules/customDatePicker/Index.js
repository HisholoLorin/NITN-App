import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

//Styled Components
import { Container } from "./Styles";
import Input from "../../atoms/input/Index";

//Helper
import { convertToShortDateFormat } from "../../../helper/dateTimeFormats";

const CustomDatePicker = ({ state, setState }) => {
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
    <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
      <Container>
        <FontAwesome name="calendar" size={20} color="#999" />

        <Input
          placeholder="Date of Birth"
          value={state}
          editable={false}
          color="#000"
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
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default CustomDatePicker;
