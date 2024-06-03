//Components
import AppView from "../../../components/atoms/AppView";
import ContactForm from "../../../components/organisms/contactForm/Index";

const ContactScreen = (props) => {
  return (
    <AppView {...props}>
      <ContactForm />
    </AppView>
  );
};

export default ContactScreen;
