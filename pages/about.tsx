import Head from "next/head";

import Layout from "../components/layout/Layout";
import AboutPage from "../components/page-components/about/About";
import Header from "../components/page-components/about/aboutComponent/header/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>Mona Software About us </title>
        <meta
          name="description"
          content="Mona Software provides good quality software development outsourced resources."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <UnderMaintenance /> */}
      <Layout HeaderComponent={Header}>
        <AboutPage />
      </Layout>
    </>
  );
}
