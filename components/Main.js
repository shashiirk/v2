import NavBar from './NavBar';

export const Main = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center max-w-else w-full mx-auto p-8 pr-40 text-6xl font-bold leading-snug">
        <p>Hello,</p>
        <p>I'm Shashikanth Reddy.</p>
        <p>A developer who loves building awesome looking web applications.</p>
      </div>
    </div>
  );
};

export default Main;
