import * as Animatable from "react-native-animatable";

import { Container, ButtonText, Button } from "./Styles";

const PrimaryButton = ({ onPress, text, style }) => {
  return (
    <Container style={style}>
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        useNativeDriver
      >
        <Button onPress={onPress}>
          <ButtonText>{text}</ButtonText>
        </Button>
      </Animatable.View>
    </Container>
  );
};
export default PrimaryButton;
