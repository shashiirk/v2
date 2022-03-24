import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../assets/icons';

const Connect = () => {
  return (
    <div className="max-w-footer w-full mx-auto mb-20 small-phone:px-8">
      <div className="mb-8 small-laptop:mb-24 text-5xl phone:text-6xl font-black ml-8 small-phone:ml-0">
        Get In Touch.
      </div>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-3 font-bold small-laptop:relative small-laptop:left-8">
        <div className="flex w-full bg-blue text-white text-center">
          <a
            href="https://github.com/shashiirk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-12 small-laptop:p-24"
          >
            <div className="mb-8 flex justify-center">
              <GitHubIcon />
            </div>
            <div className="text-xl mb-8 text-left leading-normal">
              Would you like to have a look at my other projects? You can find
              them all here 🙌.
            </div>
            <div className="text-xl">@shashiirk</div>
          </a>
        </div>
        <div className="flex w-full bg-yellow text-center text-3xl font-bold small-laptop:relative small-laptop:bottom-12 small-laptop:right-8">
          <a
            href="https://linkedin.com/in/shashiirk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-12 small-laptop:p-24"
          >
            <div className="mb-8 flex justify-center">
              <LinkedInIcon />
            </div>
            <div className="text-xl mb-8 text-left leading-normal">
              Want to discuss something related to frontend? Let's make a
              connection first 🤝.
            </div>
            <div className="text-xl">@shashiirk</div>
          </a>
        </div>
        <div className="flex w-full bg-dark text-white text-center text-3xl font-bold small-laptop:relative small-laptop:bottom-8 small-laptop:right-16">
          <a
            href="https://instagram.com/shashiirk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-12 small-laptop:p-24"
          >
            <div className="mb-8 flex justify-center">
              <InstagramIcon />
            </div>
            <div className="text-xl mb-8 text-left leading-normal">
              Connect with me on my most favourite fun place and let's have a
              chat 🤟.
            </div>
            <div className="text-xl">@shashiirk</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
