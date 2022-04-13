import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Component {...pageProps} key={router.route} />
    </>
  );
}
// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   return (
//     <>
//       <AnimatePresence exitBeforeEnter>
//         <Component {...pageProps} key={router.route} />
//       </AnimatePresence>
//     </>
//   );
// }

export default MyApp;
