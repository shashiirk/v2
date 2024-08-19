const About = () => {
  return (
    <div className="w-full bg-blue">
      <div className="max-w-else w-full mx-auto px-8 pt-16 pb-60 text-white flex flex-col tablet:flex-row">
        <div className="w-full tablet:mr-8">
          <div className="mb-8 text-5xl tablet:text-6xl font-black">About.</div>
          <div className="text-xl leading-relaxed mb-8 tablet:mb-0">
            👋 Hi! I&apos;m Shashikanth Reddy, a full-stack developer based in
            the US. I focus on building web applications with a robust backend
            and a polished frontend. I work with technologies like Spring Boot,
            Django, Next.js and React to create well-rounded, efficient, and
            scalable solutions.
          </div>
        </div>
        <div className="w-full text-xl leading-relaxed">
          <p className="mb-8">
            Currently pursuing a master&apos;s degree in Computer Science at
            Kennesaw State University, I am passionate about creating robust and
            scalable full-stack applications. I&apos;m constantly looking to
            enhance my skills and tackle new challenges..
          </p>
          <p>
            I&apos;m actively seeking a summer internship where I can leverage
            my full-stack skills and contribute to innovative projects. If you
            have any opportunities, I&apos;d love to connect!.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
