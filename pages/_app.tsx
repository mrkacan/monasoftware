import type { AppProps } from "next/app";
import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
