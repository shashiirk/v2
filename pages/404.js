import Head from 'next/head';
import { useRouter } from 'next/router';

import NavBar from '../components/NavBar';

const Error = () => {
  const router = useRouter();

  const goHomeHandler = () => {
    router.replace('/');
  };

  return (
    <>
      <Head>
        <title>Something went wrong! - Shashikanth Reddy</title>
      </Head>
      <div className="flex flex-col w-full min-h-screen">
        <NavBar />
        <div className="flex-1 flex flex-col justify-center max-w-else w-full mx-auto p-8">
          <p className="text-9xl font-black">404</p>
          <p className="text-2xl font-bold mt-3 mb-6">Something went wrong!</p>
          <button
            className="border border-dark bg-dark text-white font-bold w-fit px-6 py-2"
            onClick={goHomeHandler}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
