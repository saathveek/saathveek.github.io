import React from 'react';

function Navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full bg-background shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl text-primary">Saathveek Gowrishankar</span>
        <ul className="flex space-x-6">
            <li><a href="#Hero" className="text-text hover:text-primary">Hero</a></li>
            <li><a href="#Intro" className="text-text hover:text-primary">Intro</a></li>
            <li><a href="#XpSkills" className="text-text hover:text-primary">XpSkills</a></li>
            <li><a href="#Contact" className="text-text hover:text-primary">Contact</a></li>
        </ul>
        </div>
    </nav>
    );
}

export default Navbar;
