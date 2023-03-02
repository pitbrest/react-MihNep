import React from 'react';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper teal">
        <a href="!#" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Link</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;