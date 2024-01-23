const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className=" my-10 flex justify-center space-x-10">
          <a
            href="https://www.linkedin.com/in/comels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-500 text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.github.com/comels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-500 text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
