import NavBar from './NavBar';

export const Main = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center max-w-else w-full mx-auto p-8 text-4xl leading-snug font-bold small-phone:text-5xl small-phone:leading-snug tablet:text-6xl tablet:leading-snug small-laptop:pr-40">
        <p>Hello,</p>
        <p>I&apos;m Shashikanth Reddy.</p>
        <p>A developer who loves building awesome looking web applications.</p>
      </div>
    </div>
  );
};

export default Main;
