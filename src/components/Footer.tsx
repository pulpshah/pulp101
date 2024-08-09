import React from 'react';
import Image from 'next/image';
import Google from '../assets/SocialIcons/Google.svg';
import Facebook from '../assets/SocialIcons/Facebook.svg';
import X from '../assets/SocialIcons/X.svg';

const Footer = () => {
  const links = ['API Terms', 'User Terms', 'Privacy'];
  const socialIcons = [
    { src: Google, alt: 'Google', href: 'https://www.google.com' },
    { src: Facebook, alt: 'Facebook', href: 'https://www.facebook.com' },
    { src: X, alt: 'X', href: 'https://www.twitter.com' }
  ];

  return (
    <footer className="footer bg-white border-t-2 border-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Links */}
        <div className="links flex space-x-4 text-gray-700">
          {links.map((link, index) => (
            <a key={index} href="#" className="hover:text-purple-600">{link}</a>
          ))}
        </div>
        {/* Social Icons */}
        <div className="socials flex space-x-4">
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <Image src={icon.src} alt={icon.alt} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      {/* Footer Text */}
      <div className="text-center text-gray-700 mt-4">©2024 PULP</div>
    </footer>
  );
};

export default Footer;
