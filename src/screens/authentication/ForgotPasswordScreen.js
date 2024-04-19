//Components
import ForgotPasswordForm from "../../components/organisms/forgotPasswordForm/Index";

import AppView from "../../components/atoms/AppView";

const ForgotPassword = (props) => {
  return (
    <AppView {...props}>
      <ForgotPasswordForm {...props} />
    </AppView>
  );
};

export default ForgotPassword;
