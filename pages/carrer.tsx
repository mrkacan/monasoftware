import Head from "next/head";
// import UnderMaintenance from "../components/maintence/UnderMaintenance";
import Layout from "../components/layout/Layout";
import Career from "../components/page-components/career/Career";
import Header from "../components/page-components/career/careerComponents/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Mona Software: about us </title>
        <meta
          name="description"
          content="Mona Software provides good quality software development outsourced resources."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <UnderMaintenance /> */}
      <Layout HeaderComponent={Header}>
        <Career />
      </Layout>
    </>
  );
}
