import Button from '../../atoms/button/Index';

import {
    Container
} from './Styles'


const PrimaryButton = props => {
  return (
    <Container>
      <Button
        {...props}
        buttonColor="green"
        textColor="#FFFFFF"
      />    
    </Container>
  );
};
export default PrimaryButton;


