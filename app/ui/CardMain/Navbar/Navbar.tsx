import React from 'react';
import LinkBox from './LinkBox/LinkBox'; // Adjust the import path based on your project structure

const Navbar = () => {
  return (
    <nav className='justify-end flex w-full'>
      <LinkBox title="Works" linkText="#Works" />
      <LinkBox title="Blog" linkText="#Blog" />
      <LinkBox title="Contact" linkText="#Contact" />
    </nav>
  );
};

export default Navbar;
