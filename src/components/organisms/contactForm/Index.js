import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

//Components
import Contact from "../../molecules/contact/Index";

//Styled
import { FormContainer } from "./Styles";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { contact } from "../../../redux/user";

const ContactForm = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { contactList, next } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(contact({ page: 1 }));
  }, []);

  const onEndReached = () => {
    dispatch(contact({ page: page + 1 }));
    setPage(page + 1);
  };

  return (
    <FormContainer>
      {contactList && (
        <FlatList
          data={contactList}
          renderItem={({ item }) => <Contact {...item} />}
          keyExtractor={(item) => item?.mobileNo}
          showsVerticalScrollIndicator={true}
          onEndReached={next ? onEndReached : null}
          onEndReachedThreshold={0}
        />
      )}
    </FormContainer>
  );
};

export default ContactForm;
