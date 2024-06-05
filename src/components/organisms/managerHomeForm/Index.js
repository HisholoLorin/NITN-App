import { useEffect, useState, useCallback } from "react";
import { RefreshControl, FlatList } from "react-native";

// Components
import MainForm from "../../molecules/mainForm/Index";
import PaginateLoader from "../../atoms/paginateLoader/Index";
import FormEmpty from "../../molecules/formEmpty/Index";

// Styled Components
import { FormContainer } from "./Styles";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/user";
import { fetchFormList } from "../../../redux/form";

const ManagerHomeForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const { formList, next } = useSelector((state) => state.FormReducer);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  console.log(formList, next);

  useEffect(() => {
    dispatch(getUserDetails());
    dispatch(fetchFormList({ page: 1 }));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    dispatch(fetchFormList({ page }));
    setRefreshing(false);
  }, []);

  const onEndReached = () => {
    dispatch(fetchFormList({ page: page + 1 }));
    setPage(page + 1);
  };

  return (
    <FormContainer>
      {formList && formList.length != 0 ? (
        <FlatList
          data={formList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <MainForm {...item} navigation={navigation} />
          )}
          keyExtractor={(item) => item?.uuid}
          ListFooterComponent={next ? PaginateLoader : null}
          showsVerticalScrollIndicator={true}
          onEndReached={next ? onEndReached : null}
          onEndReachedThreshold={0}
        />
      ) : (
        <FormEmpty />
      )}
    </FormContainer>
  );
};

export default ManagerHomeForm;
