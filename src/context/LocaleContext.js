import * as React from "react";

const LocaleContext = React.createContext({
  locale: "en",
  setLocale: () => {}
});

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = React.useState("en");

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem("site-locale");
    if (stored === "en" || stored === "zh") {
      setLocale(stored);
    }
  }, []);

  const handleSetLocale = React.useCallback((nextLocale) => {
    setLocale(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("site-locale", nextLocale);
    }
  }, []);

  const value = React.useMemo(
    () => ({
      locale,
      setLocale: handleSetLocale
    }),
    [locale, handleSetLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => React.useContext(LocaleContext);

export default LocaleContext;
