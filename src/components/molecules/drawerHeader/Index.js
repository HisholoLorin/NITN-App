import { View, Text } from "react-native";

//Components
import Spacer from "../../atoms/spacer/Index";

//Styled
import { Container, ProfilePicture, Bold, Usertype } from "./Styles";

const DrawerHeader = ({ userDetails, usertype }) => {
  const { user, student } = userDetails || {};
  const { userName } = user || {};
  const { image } = student || {};
  // First name and Last name Logic
  const temp = userName?.split(" ");
  let firstName = null,
    lastName = null;
  if (temp) [firstName, lastName] = [temp[0], temp[temp.length - 1]];

  return (
    <Container>
      <Spacer>
        {/* Profile Picture */}
        {usertype !== "Manager" && (
          <ProfilePicture
            source={
              image
                ? { uri: image }
                : require("../../../../assets/profilePhoto.jpg")
            }
          />
        )}
      </Spacer>

      <Spacer bottom={1}>
        {/* User Name */}
        <Bold style={{ fontSize: 21 }}>
          {firstName + " "}
          {firstName !== lastName && (
            <Bold style={{ color: "#6C6C6C" }}>{lastName}</Bold>
          )}
        </Bold>
        <Usertype>{usertype}</Usertype>
      </Spacer>
    </Container>
  );
};

export default DrawerHeader;
