import React, { useState, useEffect, useCallback } from "react";
import { RefreshControl, FlatList } from "react-native";

// Components
import MainForm from "../../molecules/mainForm/Index";
import PaginateLoader from "../../atoms/paginateLoader/Index";
import FormEmpty from "../../molecules/formEmpty/Index";

// Styled Components
import { FormContainer } from "./Styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchFormList } from "../../../redux/form";

const StudentForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchFormList({ page }));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    dispatch(fetchFormList({ page }));
    setRefreshing(false);
  }, []);

  const { formList, next } = useSelector((state) => state.FormReducer);

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
          renderItem={({ item, index }) => (
            <MainForm
              {...item}
              navigation={navigation}
              hasDeleteOption={true}
              key={index}
            />
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

export default StudentForm;
