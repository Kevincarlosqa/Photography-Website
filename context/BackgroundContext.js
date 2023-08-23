import { useContext, createContext, useState } from "react";

const Context = createContext({
  background: false,
  setBackground: () => {},
});

const BackgroundContext = ({ children }) => {
  const [background, setBackground] = useState(false);
  return (
    <div>
      <Context.Provider value={{ background, setBackground }}>
        {children}
      </Context.Provider>
    </div>
  );
};

const useBackground = () => useContext(Context);

export default useBackground;
export { BackgroundContext, useBackground };
