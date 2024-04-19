import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { localLogin } from "../redux/auth";

const LocalLoginTrigger = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch localLogin action when component mounts
    dispatch(localLogin());
  }, [dispatch]); // Include dispatch as a dependency

  // This component doesn't render anything, so return null
  return null;
};

export default LocalLoginTrigger;
