import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import Router, { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={pathname}>
        <Component {...pageProps} />
      </PageWrapper>
    </AnimatePresence>
  );
}
