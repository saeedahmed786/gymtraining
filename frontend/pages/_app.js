import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import 'antd/dist/reset.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [homepage, setHomepage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomepage(true);
    }
    return () => {

    }
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
