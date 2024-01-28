import React from "react";
import { createContext, useEffect, useState } from "react";
import { ThemeProps } from "../styles/themes/default";

const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemeProps>("light");

  const setMode = (mode: ThemeProps) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeProps;
    localTheme && setTheme(localTheme);
  }, []);
  return { theme, themeToggle };
};

interface ConfigProjectContextType {
  themeLayout: ThemeProps;
  toggleLayoutMode: () => void;
}
const ConfigProjectContext = createContext<
  ConfigProjectContextType | undefined
>(undefined);

const ConfigProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, themeToggle } = useThemeMode();

  return (
    <ConfigProjectContext.Provider
      value={{ themeLayout: theme, toggleLayoutMode: themeToggle }}
    >
      {children}
    </ConfigProjectContext.Provider>
  );
};
const useConfigProject = () => {
  const context = React.useContext(ConfigProjectContext);
  if (context === undefined) {
    throw new Error(
      "useConfigProject must be used within a ConfigProjectProvider"
    );
  }
  return context;
}


export { ConfigProjectContext, ConfigProjectProvider, useConfigProject };
