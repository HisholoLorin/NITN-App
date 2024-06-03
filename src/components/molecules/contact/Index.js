import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

//Styled
import { ContactContainer, SubContainer, IconContainer, Label } from "./Styles";

const Contact = ({ userName, mobileNo, department }) => {
  return (
    <ContactContainer>
      <SubContainer>
        <IconContainer>
          <MaterialCommunityIcons name="account" size={20} color="#999" />
        </IconContainer>
        <Label>{userName}</Label>
      </SubContainer>

      <SubContainer>
        <IconContainer>
          <Entypo name="flow-tree" size={20} color="#999" />
        </IconContainer>
        <Label>{department}</Label>
      </SubContainer>

      <SubContainer>
        <IconContainer>
          <MaterialCommunityIcons name="phone" size={20} color="#999" />
        </IconContainer>
        <Label>+91 {mobileNo}</Label>
      </SubContainer>
    </ContactContainer>
  );
};

export default Contact;
