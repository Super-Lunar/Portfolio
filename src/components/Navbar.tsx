import Link from "../Link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SelectedPage } from "../constants/selectedPage";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav className="flex items-center justify-between p-4 text-white mt-4 w-full">
      <div className="flex flex-shrink-0 gap-8 items-start w-full justify-center">
        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-4 text-2xl mr-8 w-full">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/saurabh-sharma-timilsina-848550270/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn Profile"
          className="hover:text-blue-600 transition duration-200"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Super-Lunar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub Profile"
          className="hover:text-gray-400 transition duration-200"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/itsmesaurough/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram Profile"
          className="hover:text-pink-500 transition duration-200"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
