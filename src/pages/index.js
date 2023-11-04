import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <Head>
          <title>Create Iristagram</title>
          <meta name="description" content="Create Iristagram" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <h1>Hello</h1>
      </div>
  )
}
