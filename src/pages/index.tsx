import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Head from 'next/head'

export default function Home(){
  return (
    <>
      <Head>
        <title>LotOnline | Início</title>
      </Head>
      <Hero />
      <Footer />
    </>
  )
}
