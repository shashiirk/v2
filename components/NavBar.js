const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 small-phone:h-24">
      <div className="triangle"></div>
      <a
        href="https://drive.google.com/file/d/1dHzkrPlEd3OHUI0OJu_Fj_8hW65Zk70N/view"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow mr-6 small-phone:mr-8 px-6 py-2 font-bold text-inherit"
      >
        Resume
      </a>
    </div>
  );
};

export default NavBar;
