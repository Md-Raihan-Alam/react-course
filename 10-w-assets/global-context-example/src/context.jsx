import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const updateValue = () => {
    setCount(count + 1);
  };
  return (
    <GlobalContext.Provider value={{ count, updateValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
