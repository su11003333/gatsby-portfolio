import * as React from "react";
import { LocaleProvider } from "./src/context/LocaleContext";

export const wrapRootElement = ({ element }) => <LocaleProvider>{element}</LocaleProvider>;
