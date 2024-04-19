import _ from "lodash";
import { useDispatch } from "react-redux";

//Helper
import { capitalizedFirstLetter } from "../helper/auth";

const debouncedAPICall = _.debounce(
  ({ search, dispatch, action }) => {
    dispatch(action({ search, page: 1 }));
  },
  1000
);

export const searchValue = ({ ...actions }) => {
  const {dispatch, setSearch} = actions;
  dispatch(setSearch(capitalizedFirstLetter(actions.search)));
  debouncedAPICall(actions);
};
