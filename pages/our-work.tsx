import Head from "next/head";
// import UnderMaintenance from "../components/maintence/UnderMaintenance";
import Layout from "../components/layout/Layout";
import Header from "../components/page-components/ourWorks/ourWorksComponents/header/Header";
import OurWorks from "../components/page-components/ourWorks/OurWorks";

export default function OurWork() {
  return (
    <>
      <Head>
        <title>Mona Software Our Works 🛠 </title>
        <meta
          name="description"
          content="Mona Software provides good quality software development outsourced resources."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <UnderMaintenance /> */}
      <Layout HeaderComponent={Header}>
        <OurWorks />
      </Layout>
    </>
  );
}
