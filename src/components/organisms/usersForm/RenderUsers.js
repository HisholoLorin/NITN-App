import { Text } from "react-native";
//Components
import User from "../../molecules/user/Index";

//Helper
import { getColor } from "../../../helper/getColor";

const RenderUsers = ({ item, index, userList, navigation }) => {
  let showInitial = true;
  const { user, student, maintenance } = item || {};
  console.log(item);
  const initialLetter = user?.userName.charAt(0).toUpperCase();
  for (let i = 0; i < userList.length; i++) {
    if (userList[i]?.user?.userName.charAt(0).toUpperCase() === initialLetter) {
      if (i === index) showInitial = true;
      else showInitial = false;
      break;
    }
  }
  return (
    <>
      {showInitial && <Text style={{ fontSize: 18 }}>{initialLetter}</Text>}
      <User
        user={user}
        student={student}
        maintenance={maintenance}
        backgroundColor={getColor(index)}
        navigation={navigation}
      />
    </>
  );
};

export default RenderUsers;
