import React, { useState } from 'react';
import { smoothScrollToId } from "../utils/smoothScrollToId";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#Hero' },
    { label: 'About', href: '#About' },
    { label: 'Education', href: '#Education' },
    { label: 'Skills', href: '#Skills' },
    { label: 'Experience', href: '#Experience' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Awards', href: '#Awards' },
    { label: 'Certifications', href: '#Certifications' },
    { label: 'Contact', href: '#Contact' },
  ];

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    smoothScrollToId(href);
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-background/70 shadow backdrop-blur-sm border-b border-background_muted/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/logo_sg.png"
            alt="Saathveek logo"
            className="h-9 w-9 object-contain drop-shadow-[0_0_2px_white]"
          />
          <span className="font-greatvibes text-text text-lg sm:text-3xl">Saathveek&nbsp;Gowrishankar</span>
        </div>

        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="text-sm lg:text-base text-text hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-text hover:text-primary transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18 18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div id="mobile-nav-menu" className="md:hidden px-4 pb-4 bg-background border-t border-background_muted/50">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="block rounded-md px-3 py-2 text-text hover:text-primary hover:bg-background_muted/40 transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
