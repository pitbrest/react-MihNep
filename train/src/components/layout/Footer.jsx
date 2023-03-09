import React from 'react';

function Footer() {
  return (
    <footer className="page-footer teal">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()}
          <a className="grey-text text-lighten-4 right" href="https://github.com/pitbrest" target={'_blank'} rel="noreferrer">pitbrest</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;