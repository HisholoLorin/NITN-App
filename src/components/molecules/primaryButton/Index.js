import * as Animatable from "react-native-animatable";

import { Container, ButtonText, Button } from "./Styles";

const PrimaryButton = ({ onPress, text }) => {
  return (
    <Container>
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
