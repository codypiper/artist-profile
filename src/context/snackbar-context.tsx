"use client";

import Snackbar from "@/components/Snackbar";
import type { SnackbarType } from "@/types/Snackbar";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

interface SnackbarContextType {
  showSnackbar: (type: SnackbarType, message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

/**
 * The length of time that the snackbar will be displayed.
 */
const DISPLAY_DURATION = 7000;

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context == null) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export const SnackbarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [snackbars, setSnackbars] = useState<Snackbar[]>([]);

  const removeSnackbar = (id: string) => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  };

  const showSnackbar = useCallback((type: SnackbarType, message: string) => {
    const id = crypto.randomUUID();
    setSnackbars((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      removeSnackbar(id);
    }, DISPLAY_DURATION);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <ol className="pointer-events-none fixed inset-x-0 bottom-0 z-40 m-6 flex justify-center sm:justify-end">
        {snackbars.map((snackbar) => (
          <Snackbar
            key={snackbar.id}
            close={() => {
              removeSnackbar(snackbar.id);
            }}
            {...snackbar}
          />
        ))}
      </ol>
    </SnackbarContext.Provider>
  );
};
