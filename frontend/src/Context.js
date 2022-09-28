import React, { createContext } from "react";

export const contextProvider = createContext();

const Context = ({ children }) => {
  return (
    <contextProvider.Provider value={{ message: "Hello from context" }}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
