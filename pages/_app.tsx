import type { AppProps } from "next/app";
import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import AppProvider from "../context/AppProvider";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AppProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
