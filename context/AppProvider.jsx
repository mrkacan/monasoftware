import React from "react";
import CarrerProvider from "./CarrerProvider";
import ContactProvider from "./ContactProvider";
import IsMobileProvider from "./IsMobileProvider";

function AppProviders({ children }) {
  return (
    <IsMobileProvider>
      <ContactProvider>
        <CarrerProvider>{children}</CarrerProvider>
      </ContactProvider>
    </IsMobileProvider>
  );
}

export default AppProviders;
