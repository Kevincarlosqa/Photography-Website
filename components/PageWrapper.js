import React from "react";
import styles from "../src/styles/PageWrapper.module.scss";
import { BackgroundContext } from "../context/BackgroundContext";
import GradientCircle from "./GradientCircle";

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <BackgroundContext>
        {/* NAVBAR */}
        <GradientCircle />
        {/* BLACK ANIMATION */}
        <div className={styles.page}>{children}</div>
      </BackgroundContext>
    </div>
  );
};

export default PageWrapper;
