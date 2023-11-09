import { Inter } from 'next/font/google'
import Head from "next/head";
import Header from '@/components/Header';
import Feed from "@/components/Feed";
import UploadModal from "@/components/UploadModal";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='bg-gray-50 min-h-screen'>
        <Head>
          <title>Iristagram</title>
          <meta name="description" content="Create Iristagram" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Feed />

        <UploadModal />


      </div>
  )
}
