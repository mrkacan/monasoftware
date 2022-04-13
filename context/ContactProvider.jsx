import React, { useContext } from "react";

const ContactContext = React.createContext();

function ContactProvider({ children }) {
  const value = React.useState(false);
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}
export function useContactContext() {
  const contactValue = useContext(ContactContext);
  if (!contactValue) {
    throw new Error("you must to use useContact in wrapper ContactProvider");
  }

  return contactValue;
}

export default ContactProvider;
