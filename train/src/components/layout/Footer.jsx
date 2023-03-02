import React from 'react';

function Footer() {
  return (
    <footer class="page-footer teal">
      <div class="footer-copyright">
        <div class="container">
          © {new Date().getFullYear()}
          <a class="grey-text text-lighten-4 right" href="https://github.com/pitbrest" target={'_blank'} rel="noreferrer">pitbrest</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;