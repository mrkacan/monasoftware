import Head from "next/head";
// import UnderMaintenance from "../components/maintence/UnderMaintenance";
import Layout from "../components/layout/Layout";
import HomePage from "../components/page-components/home/Home";
import Header from "../components/page-components/home/homeComponents/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mona Software</title>
        <meta
          name="description"
          content="Mona Software provides good quality software development outsourced resources."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout HeaderComponent={Header}>
        <HomePage />
      </Layout>
    </>
  );
}
