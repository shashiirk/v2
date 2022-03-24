const Connect = () => {
  return (
    <div className="max-w-footer w-full mx-auto mb-20 px-8">
      <div className="mb-8 small-laptop:mb-24 text-5xl phone:text-6xl font-black">
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
            <div className="text-2xl mb-8">Github</div>
            <div className="text-xl mb-8 text-left leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate inventore error doloribus alias, dolores blanditiis.
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
            <div className="text-2xl mb-8">LinkedIn</div>
            <div className="text-xl mb-8 text-left leading-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              labore reprehenderit animi, hic sapiente explicabo!
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
            <div className="text-2xl mb-8">Instagram</div>
            <div className="text-xl mb-8 text-left leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              aspernatur illum reprehenderit ipsum! Impedit, delectus.
            </div>
            <div className="text-xl">@shashiirk</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
