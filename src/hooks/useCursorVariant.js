import { createContext, useContext } from "react";

export const CursorContext = createContext({ setVariant: () => {} });

export const useCursorVariant = () => useContext(CursorContext);
