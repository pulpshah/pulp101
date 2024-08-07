import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-white border-t-2 border-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="links flex space-x-4 text-gray-700">
          <a href="#" className="hover:text-purple-600">API Terms</a>
          <a href="#" className="hover:text-purple-600">User Terms</a>
          <a href="#" className="hover:text-purple-600">Privacy</a>
        </div>
        <div className="socials flex space-x-4">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/google.png" alt="Google" className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-700 mt-4">
        ©2024 PULP
      </div>
    </footer>
  );
}

export default Footer;
