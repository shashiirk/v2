import { FaGithub } from 'react-icons/fa';

const Connect = () => {
  return (
    <div className="max-w-else w-full mx-auto px-8 pt-16 pb-8 flex">
      <div className="flex w-full bg-blue text-white text-center text-3xl font-bold">
        <a
          href="https://github.com/shashiirk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-8"
        >
          GitHub
        </a>
      </div>
      <div className="flex w-full bg-yellow text-center text-3xl font-bold">
        <a
          href="https://linkedin.com/in/shashiirk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-8"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex w-full bg-dark text-white text-center text-3xl font-bold">
        <a
          href="https://instagram.com/shashiirk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-8"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Connect;
