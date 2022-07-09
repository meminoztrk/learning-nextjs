import Header from '../components/header'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return <>
    <Header/>
    <Component {...pageProps} />
  </>
}

export default MyApp
