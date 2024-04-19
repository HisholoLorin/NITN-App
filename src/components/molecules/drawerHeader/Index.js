import { View, Text } from "react-native";

//Components
import Spacer from "../../atoms/spacer/Index";

//Styled
import { ProfilePicture, Bold } from "./Styles";

const DrawerHeader = ({ userDetails }) => {
  const { username, email, image } = userDetails;

  // First name and Last name Logic
  const temp = username?.split(" ");
  let firstName = null,
    lastName = null;
  if (temp) [firstName, lastName] = [temp[0], temp[temp.length - 1]];

  return (
    <>
      <Spacer>
        {/* Profile Picture */}
        <ProfilePicture
          source={
            image
              ? { uri: image }
              : require("../../../../assets/profilePhoto.jpg")
          }
        />
      </Spacer>

      <Spacer bottom={1}>
        {/* User Name */}
        <Bold style={{ fontSize: 21 }}>
          {firstName + " "}
          <Bold style={{ color: "#6C6C6C" }}>{lastName}</Bold>
        </Bold>
      </Spacer>

      <Text style={{ color: "#6C6C6C" }}>{email}</Text>
    </>
  );
};

export default DrawerHeader;
