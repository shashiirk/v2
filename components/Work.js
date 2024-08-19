import Image from 'next/image';

import tiptopBanner from '../assets/images/tiptop.png';
import rhinoBanner from '../assets/images/rhino.png';
import cryptoPricesBanner from '../assets/images/crypto-prices.png';
import fakeTweetGeneratorBanner from '../assets/images/fake-tweet-generator.png';

const Work = () => {
  return (
    <div className="max-w-work w-full p-4 -mt-28 mx-auto">
      <div className="bg-slate-50 flex items-stretch flex-col-reverse small-laptop:flex-row mb-32 shadow-lg">
        <div className="w-full small-laptop:w-1/2 px-8 py-12 phone:px-12 phone:py-16 bg-emerald-200 flex flex-col justify-center">
          <div className="mb-8 text-4xl tablet:text-6xl font-black">Tiptop</div>
          <div className="mb-8 text-xl leading-relaxed">
            A fake online shopping application where you can shop men&apos;s
            clothing. It also provides features such as wishlist management,
            cart management etc.
          </div>
          <ul className="mb-9 flex flex-wrap gap-2 phone:gap-4">
            <li className="bg-white py-1 px-2">Next.js</li>
            <li className="bg-white py-1 px-2">Redux</li>
            <li className="bg-white py-1 px-2">styled-components</li>
            <li className="bg-white py-1 px-2">Firebase</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tiptopstore.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark bg-dark text-white text-lg font-bold px-6 py-3 phone:px-8"
            >
              View Live
            </a>
            <a
              href="https://github.com/shashiirk/tiptop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark text-lg font-bold px-6 py-3 phone:px-8"
            >
              See Code
            </a>
          </div>
        </div>
        <div className="w-full small-laptop:w-1/2">
          <Image src={tiptopBanner} alt="Tiptop" layout="responsive" />
        </div>
      </div>
      <div className="bg-slate-50 flex items-stretch flex-col-reverse small-laptop:flex-row mb-32 shadow-lg">
        <div className="w-full small-laptop:w-1/2 px-8 py-12 phone:px-12 phone:py-16 bg-sky-200 flex flex-col justify-center">
          <div className="mb-8 text-4xl tablet:text-6xl font-black">Rhino</div>
          <div className="mb-8 text-xl leading-relaxed">
            Rhino helps you in understanding where your money is actually going
            in and how it is coming to you by tracking all your spending and
            gaining.
          </div>
          <ul className="mb-9 flex flex-wrap gap-2 phone:gap-4">
            <li className="bg-white py-1 px-2">React</li>
            <li className="bg-white py-1 px-2">styled-components</li>
            <li className="bg-white py-1 px-2">Firebase</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://the-rhino-app.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark bg-dark text-white text-lg font-bold px-6 py-3 phone:px-8"
            >
              View Live
            </a>
            <a
              href="https://github.com/shashiirk/rhino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark text-lg font-bold px-6 py-3 phone:px-8"
            >
              See Code
            </a>
          </div>
        </div>
        <div className="w-full small-laptop:w-1/2 ">
          <Image src={rhinoBanner} alt="Rhino" layout="responsive" />
        </div>
      </div>
      <div className="bg-slate-50 flex items-stretch flex-col-reverse small-laptop:flex-row mb-32 shadow-lg">
        <div className="w-full small-laptop:w-1/2 px-8 py-12 phone:px-12 phone:py-16 bg-indigo-200 flex flex-col justify-center">
          <div className="mb-8 text-4xl tablet:text-6xl font-black">
            Crypto Prices
          </div>
          <div className="mb-8 text-xl leading-relaxed">
            It is an application that fetches the live prices of
            cryptocurrencies with the help of CoinGecko API and displays it to
            the user with a stunning User Interface.
          </div>
          <ul className="mb-9 flex flex-wrap gap-2 phone:gap-4">
            <li className="bg-white py-1 px-2">React</li>
            <li className="bg-white py-1 px-2">styled-components</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://the-crypto-prices.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark bg-dark text-white text-lg font-bold px-6 py-3 phone:px-8"
            >
              View Live
            </a>
            <a
              href="https://github.com/shashiirk/crypto-prices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark text-lg font-bold px-6 py-3 phone:px-8"
            >
              See Code
            </a>
          </div>
        </div>
        <div className="w-full small-laptop:w-1/2 ">
          <Image
            src={cryptoPricesBanner}
            alt="Crypto Prices"
            layout="responsive"
          />
        </div>
      </div>
      <div className="bg-slate-50 flex items-stretch flex-col-reverse small-laptop:flex-row mb-32 shadow-lg">
        <div className="w-full small-laptop:w-1/2 px-8 py-12 phone:px-12 phone:py-16 bg-rose-200 flex flex-col justify-center">
          <div className="mb-8 text-4xl tablet:text-6xl font-black">
            Fake Tweet Generator
          </div>
          <div className="mb-8 text-xl leading-relaxed">
            With this tool you can create convincing fake tweet images. This
            tool is completely customizable so you can choose any name, any
            content, any time, any number of likes and many more.
          </div>
          <ul className="mb-9 flex flex-wrap gap-2 phone:gap-4">
            <li className="bg-white py-1 px-2">HTML</li>
            <li className="bg-white py-1 px-2">CSS</li>
            <li className="bg-white py-1 px-2">JavaScript</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://shashiirk.github.io/fake-tweet-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark bg-dark text-white text-lg font-bold px-6 py-3 phone:px-8"
            >
              View Live
            </a>
            <a
              href="https://github.com/shashiirk/fake-tweet-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dark text-lg font-bold px-6 py-3 phone:px-8"
            >
              See Code
            </a>
          </div>
        </div>
        <div className="w-full small-laptop:w-1/2 ">
          <Image
            src={fakeTweetGeneratorBanner}
            alt="fake tweet generator"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
