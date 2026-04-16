import React from 'react';
import './Header.css';
function Header() {
 return (
   <header className="header">
     <h1>Welcome to My Website</h1>
     <nav>
       <a href="#about">About</a>
       <a href="#contact">Contact</a>
     </nav>
   </header>
 );
}
export default Header;