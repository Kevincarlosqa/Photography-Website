import React from "react";
import styles from "../src/styles/PageWrapper.module.scss";

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>PageWrapper</h1>
    </div>
  );
};

export default PageWrapper;
