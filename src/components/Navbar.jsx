import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <p className="mx-2 text-[30px] font-extrabold">Saruul</p>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.threads.net/@saruul_7001?xmt=AQGzBh8bUuCCNW8D9jrI5f_c9qM57sforjD_veuVKOymhuc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Threads"
        >
          <FaThreads />
        </a>
        <a
          href="https://github.com/Saruul89"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/saruul_7001/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagramm"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/Munkhsaruul.Rikudou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
