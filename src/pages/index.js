import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import useBackground from "../../context/BackgroundContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { setBackground } = useBackground();
  return (
    <div className={styles.container}>
      <main
        // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        onMouseEnter={() => setBackground(true)}
        onMouseLeave={() => setBackground(false)}
        style={{ position: "relative", zIndex: "10" }}
      >
        <h1>new app</h1>
      </main>
    </div>
  );
}
