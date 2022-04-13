import React, { useContext } from "react";

const CarrerContext = React.createContext();

function CarrerProvider({ children }) {
  const value = React.useState(false);
  return (
    <CarrerContext.Provider value={value}>{children}</CarrerContext.Provider>
  );
}
export function useCarrerContext() {
  const providerValue = useContext(CarrerContext);
  if (!providerValue) {
    throw new Error("you must to use useContact in wrapper CarrerProvider");
  }

  return providerValue;
}

export default CarrerProvider;
