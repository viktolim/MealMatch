import InputText from "./InputText";

const InnputField = ({ children }) => {
  return (
    <InputText
      putError={User.firstName.trim().length ? null : "Please enter first name"}
      flex={1}
    >
      First Name
    </InputText>
  );
};
