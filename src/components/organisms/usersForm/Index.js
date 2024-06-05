import { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { FlatList, Text, StyleSheet } from "react-native";

//Components
import PaginateLoader from "../../atoms/paginateLoader/Index";
import RenderUsers from "./RenderUsers";
import Spacer from "../../atoms/spacer/Index";

//Styled Components
import { FormContainer, StyledIcon, IconContainer } from "./Styles";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../../redux/user";

const UsersForm = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const { userList, next } = useSelector((state) => state.UserReducer);
  const [usertype, setUsertype] = useState("Student");

  const dispatch = useDispatch();
  console.log(userList);
  useEffect(() => {
    dispatch(getUserList({ page, usertype }));
  }, [usertype]);

  // Pagination
  const onEndReached = () => {
    setPage(page + 1);
    dispatch(getUserList({ page: page + 1, usertype }));
  };

  return (
    <FormContainer>
      <Dropdown
        style={styles.dropdown}
        data={[{ usertype: "Student" }, { usertype: "Maintenance" }]}
        maxHeight={300}
        labelField="usertype"
        valueField="usertype"
        placeholder={usertype}
        value={usertype}
        autoScroll={false}
        onChange={(item) => {
          setUsertype(item.usertype);
        }}
      />

      <Spacer />

      {userList && (
        <FlatList
          data={userList}
          renderItem={({ item, index }) => {
            return (
              <RenderUsers
                item={item}
                index={index}
                userList={userList}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(item) => item?.user?.uuid}
          ListFooterComponent={next ? PaginateLoader : null}
          showsVerticalScrollIndicator={false}
          onEndReached={next ? onEndReached : null}
          onEndReachedThreshold={0}
        />
      )}
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: "5%",
  },
});

export default UsersForm;
