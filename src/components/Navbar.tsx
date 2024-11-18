const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-8'>
      <div className='flex flex-shrink-0 items-center hover:border-b transition duration-200'>
        <a href='/' aria-label='Home'>
          Home
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
