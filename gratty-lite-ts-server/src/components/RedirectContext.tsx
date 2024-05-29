import * as React from "react";
import { useState, createContext } from "react";
import { RedirectContextType } from "../@types/redirect";
export const RedirectContext = createContext<RedirectContextType | null>(null);

const RedirectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [redirect, setRedirect] = useState("/home");
  const saveRedirect = (redirectPath: string) => {
    setRedirect(redirectPath);
  };

  return (
    <RedirectContext.Provider value={{ redirect, saveRedirect }}>
      {children}
    </RedirectContext.Provider>
  );
};

export default RedirectProvider;
