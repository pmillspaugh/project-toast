import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function handleRemoveToast(id) {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id)
    );
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            id={id}
            message={message}
            variant={variant}
            handleRemoveToast={handleRemoveToast}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
