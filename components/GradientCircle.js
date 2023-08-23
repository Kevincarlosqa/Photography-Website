import useBackground from "../context/BackgroundContext";
import styles from "../src/styles/GradientCircle.module.scss";

const GradientCircle = () => {
  const { background } = useBackground();
  return (
    <div>
      <div className={`${styles.container}`} />
      <div
        className={styles.black}
        style={!background ? { opacity: "1", zIndex: "5" } : undefined}
      />
    </div>
  );
};

export default GradientCircle;
