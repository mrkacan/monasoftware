import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mona Software</title>
        <meta name="description" content="Mona Software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://monasoftware.com">Mona Software!</a>
        </h1>

        <p className={styles.description}>
          We are still under{' '}
          <code className={styles.code}>{`<Construction />`}</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/company/monasoftware" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
          Powered by Next.JS
      </footer>
    </div>
  )
}

export default Home
