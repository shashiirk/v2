import Head from 'next/head';

import Main from '../components/Main';
import About from '../components/About';
import Work from '../components/Work';
import Connect from '../components/Connect';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shashikanth Reddy - Frontend Developer based in India</title>
      </Head>
      <Main />
      <About />
      <Work />
      <Connect />
      <Contact />
      <Footer />
    </div>
  );
}
