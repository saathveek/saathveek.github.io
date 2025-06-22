import React from 'react';
import { SiGithub, SiLinkedin, /*SiGmail*/ } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
// import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";

const version = process.env.REACT_APP_VERSION;

function Footer() {
    // var iconClassName = "hover:text-primary transition-colors"
    return (
        <footer className="bg-background_muted text-background border-t border-background_muted px-6 py-3">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">

                {/* Left: Name, Copyright, Version */}
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
                    <p className="font-semibold">Saathveek Gowrishankar</p>
                    <span className="text-muted">© {new Date().getFullYear()}</span>
                    <span className="text-muted hidden md:inline">|</span>
                    <span className="text-muted">{version}</span>
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4 text-2xl text-muted">
                    <a
                        href="mailto:sg59@illinois.edu"
                        className="text-4xl mt-[-4px] hover:text-primary transition-colors"
                    >
                        <IoIosMail />
                    </a>
                    <a
                        href="https://github.com/saathveek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-primary transition-colors"
                    >
                        <SiGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/saathveek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        <SiLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
