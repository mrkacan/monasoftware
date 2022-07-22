import React from "react";
import useIsMobile from "../hooks/useIsMobile";
const IsMobileContext = React.createContext();

export const useIsMobileContext = () => {
  const isMobile = React.useContext(IsMobileContext);
  if (typeof isMobile !== "boolean") {
    throw new Error("useIsMobileContext must used within IsMobileProvider !!");
  }
  return isMobile;
};
function IsMobileProvider({ children }) {
  const { isMobile } = useIsMobile();
  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
}

export default IsMobileProvider;
