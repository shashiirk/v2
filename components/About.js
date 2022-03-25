const About = () => {
  return (
    <div className="w-full bg-blue">
      <div className="max-w-else w-full mx-auto px-8 pt-16 pb-60 text-white flex flex-col tablet:flex-row">
        <div className="w-full tablet:mr-8">
          <div className="mb-8 text-5xl tablet:text-6xl font-black">About.</div>
          <div className="text-xl leading-relaxed mb-8 tablet:mb-0">
            👋 Hi! I'm Shashikanth Reddy, a frontend developer based in India.
            Building web applications with appealing design while keeping it's
            functionality is what I strive for. I'm into frontend development
            from past one year. Since then I've been building projects to
            develop my skills. I'm also learning backend development and looking
            forward to be a full stack developer.
          </div>
        </div>
        <div className="w-full text-xl leading-relaxed">
          <p className="mb-8">
            Currently, I'm pursuing under-graduation in the field of Information
            Technology. I'm interested in JavaScript technologies. Some of the
            frontend technologies which I worked with and would like to work
            with in the future are Next.js, React, Redux, Styled components,
            Tailwind CSS, Firebase etc.
          </p>
          <p>
            I'm actively looking for opportunities where I can utilize my skills
            and learn new things at the same time. Do consider me if you have
            one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
