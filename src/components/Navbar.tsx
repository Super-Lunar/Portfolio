import { useState } from "react";
import Link from "../Link";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import { SelectedPage } from "../constants/selectedPage";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  // State for controlling the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo or Links Container */}
      <div className="flex flex-shrink-0 gap-8 items-center justify-between w-full lg:w-auto">
        <div className="hidden lg:flex gap-8">
          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <FaBars /> {/* Hamburger Icon */}
        </button>
      </div>

      {/* Social Media Icons (Visible on large screens) */}
      <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/saurabh-sharma-timilsina-848550270/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn Profile"
          className="hover:text-blue-600 transition duration-200 mx-2"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Super-Lunar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub Profile"
          className="hover:text-gray-400 transition duration-200 mx-2"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/itsmesaurough/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram Profile"
          className="hover:text-pink-500 transition duration-200 mx-2"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Mobile Menu (Visible on small screens when hamburger is clicked) */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close Menu" className="text-white text-3xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 text-white text-2xl">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            onClick={toggleMenu}
          />
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            onClick={toggleMenu}
          />
          <Link
            page="Experience"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            onClick={toggleMenu}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
