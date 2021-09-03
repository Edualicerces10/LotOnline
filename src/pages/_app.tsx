import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "../styles/theme"
import NextNprogress from 'nextjs-progressbar'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <ChakraProvider theme={theme}>
      <Navbar />
      <NextNprogress
        color="#FF7900"
        startPosition={0.9}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
