import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between '>
      <div className='flex flex-shrink-0 items-center hover:border-b transition duration-200'>
        <a href='/' aria-label='Home'>
          Home
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/saurabh-sharma-timilsina-848550270/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        {/* Github */}
        <a
          href='https://github.com/Super-Lunar/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        {/* instagram */}
        <a
          href='https://www.instagram.com/itsmesaurough/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
