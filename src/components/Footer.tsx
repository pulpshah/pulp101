import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="tabButtons">
        <div className="apiTerms">
          <div className="text">API Terms</div>
        </div>
        <div className="apiTerms">
          <div className="text">User Terms</div>
        </div>
        <div className="apiTerms">
          <div className="text">Privacy</div>
        </div>
      </div>
      <div className="socials">
        <div className="socialButton">
          <img className="socialIcon" alt="" src="Social icon.svg" />
        </div>
        <div className="socialButton1">
          <img className="socialIcon" alt="" src="Social icon.svg" />
        </div>
        <div className="socialButton2">
          <img className="socialIcon" alt="" src="Social icon.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;