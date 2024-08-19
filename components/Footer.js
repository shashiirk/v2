const Footer = () => {
  return (
    <div className="w-full bg-blue mt-12 p-8">
      <div className="bg-dark text-white text-center max-w-footer w-full mx-auto -mt-20 p-8">
        <div className="w-fit mx-auto ">
          <div className="flex flex-col phone:flex-row items-center">
            <p>
              View source on{' '}
              <a
                href="https://github.com/shashiirk/v2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-hover:hover:underline hover-none:active:underline"
              >
                GitHub
              </a>
            </p>
            <span className="hidden phone:inline-block w-1 h-1 bg-white rounded-full mx-2"></span>
            <p>
              Design inspired by{' '}
              <a
                href="https://stefivanov.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-hover:hover:underline  hover-none:active:underline"
              >
                stefivanov.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
