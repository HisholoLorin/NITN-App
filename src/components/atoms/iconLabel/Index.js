import { Container, IconContainer } from "./Styles";
import { View, Text } from "react-native";

const IconLabel = ({ icon, label, top, bottom, width }) => {
  return (
    <Container top={top} bottom={bottom}>
      <IconContainer width={width}>{icon()}</IconContainer>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Text style={{color : "#6C6C6C"}}>{label}</Text>
      </View>
    </Container>
  );
};

export default IconLabel;
