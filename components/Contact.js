const Contact = () => {
  return (
    <div className="px-8 mb-32 max-w-else w-full mx-auto">
      <a
        href="mailto:kolanshashii@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit p-4 mx-auto text-center text-6xl font-bold effect"
      >
        <span className="hidden tablet:block">kolanshashii@gmail.com</span>
        <div className="text-5xl small-phone:text-6xl tablet:hidden">
          <div>kolanshashii</div>
          <div>@gmail.com</div>
        </div>
      </a>
    </div>
  );
};

export default Contact;
