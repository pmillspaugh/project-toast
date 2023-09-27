import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleDismissToasts(event) {
      if (event.key === "Escape") {
        callback();
      }
    }

    document.addEventListener("keydown", handleDismissToasts);

    return () => {
      document.removeEventListener("keydown", handleDismissToasts);
    };
  }, [callback]);
}
