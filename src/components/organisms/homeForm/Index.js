import { useEffect } from "react";

//Components
import Title from "../../atoms/title/Index";
import Spacer from "../../atoms/spacer/Index";
import PrimaryButton from "../../molecules/primaryButton/Index";

//Styled Components
import { FormContainer } from "./Styles";

//Redux
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../redux/user";

const HomeForm = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  return (
    <FormContainer>
      <Title>Home</Title>
      <Spacer>
        
      </Spacer>
    </FormContainer>
  );
};

export default HomeForm;
