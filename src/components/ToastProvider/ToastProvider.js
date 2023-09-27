import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey.hook";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  function addToast({ message, selectedVariant }) {
    setToasts((previousToasts) => [
      ...previousToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant: selectedVariant,
      },
    ]);
  }

  function removeToast(id) {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id)
    );
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
