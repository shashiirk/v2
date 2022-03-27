const About = () => {
  return (
    <div className="w-full bg-blue">
      <div className="max-w-else w-full mx-auto px-8 pt-16 pb-60 text-white flex flex-col tablet:flex-row">
        <div className="w-full tablet:mr-8">
          <div className="mb-8 text-5xl tablet:text-6xl font-black">About.</div>
          <div className="text-xl leading-relaxed mb-8 tablet:mb-0">
            👋 Hi! I&apos;m Shashikanth Reddy, a passionate frontend developer
            based in India. I strive to construct web applications that are
            appealing in design while maintaining their functionality. I&apos;ve
            been working in frontend development for over a year now. I always
            build projects to hone my skills.
          </div>
        </div>
        <div className="w-full text-xl leading-relaxed">
          <p className="mb-8">
            Currently, I&apos;m pursuing a bachelor&apos;s degree in Information
            Technology. I am interested in JavaScript technologies. Some
            frontend technologies that I have worked with and would like to work
            with in the future are Next.JS, React, Redux, Styled components,
            Tailwind CSS, Firebase, etc.
          </p>
          <p>
            I&apos;m actively seeking roles where I can broaden my knowledge and
            utilize my skills. If you have any for me, please consider me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
