import React from 'react';
import LinkBox from '@/app/ui/LinkBox/LinkBox'; // Adjust the import path based on your project structure

const Navbar = () => {
  return (
    <nav className='justify-end flex w-full'>
      <div className='m-10'>
        <LinkBox title="Works" linkText="#Works" />
        <LinkBox title="Blog" linkText="#Blog" />
        <LinkBox title="Contact" linkText="#Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
