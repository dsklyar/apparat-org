"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LayoutContextState = {
  layoutExpanded: boolean;
  toggleLayoutExpanded: () => void;
};

const DEFAULT_STATE: LayoutContextState = {
  layoutExpanded: false,
  toggleLayoutExpanded: () => null,
};

export const LayoutContext = createContext<LayoutContextState>(DEFAULT_STATE);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("Needs LayoutContext Provider");
  return context;
};

export const LayoutContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const pathname = usePathname();
  const [layoutExpanded, setLayoutExpanded] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      ...DEFAULT_STATE,
      layoutExpanded,
      toggleLayoutExpanded: () => setLayoutExpanded((prev) => !prev),
    }),
    [layoutExpanded]
  );

  useEffect(() => {
    if (pathname !== "/photos") {
      setLayoutExpanded(false);
    }
  }, [pathname]);

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};
