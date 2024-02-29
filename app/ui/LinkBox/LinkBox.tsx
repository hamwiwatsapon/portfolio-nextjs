import React from 'react';

interface LinkBoxProps {
  title: string;
  linkText: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ title, linkText }) => {
  return (
    <a href={linkText} rel={title} className='text-black text-xl font-heebo font-bold m-5'>
      {title}
    </a>
  );
};

export default LinkBox;
