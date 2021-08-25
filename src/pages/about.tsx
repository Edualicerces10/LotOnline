import AboutContent from '../components/AboutComponents'
import Head from 'next/head'

import Footer  from '../components/Footer'
export default function About(){
  return (
    <>
      <Head>
        <title>LotOnline | Sobre Nós</title>
      </Head>
      <AboutContent />
      <Footer />
    </>
  )
}
