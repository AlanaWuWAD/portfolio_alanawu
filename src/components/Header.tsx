import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-3 bg-transparent z-50">
      <div className="fixed md:static top-0 left-0 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/" className="flex items-end space-x-2">
          <img className="w-10 h-10 rounded-full object-cover" src="/portfolio_alanawu/removebg-preview.png" alt="logo" />
          <span className="comic-relief-bold text-slate-400">ALANAWOOO...</span>
        </a>

        {/* Hamburger */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with slide-down */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} 
        `}
      >
        <ul className="flex flex-col gap-4 py-4 text-gray-200 font-medium text-base px-3">
          {[
            { label: "[About]", hover: "[I’m Alana!]", link: "#about" },
            { label: "[Skills]", hover: "[Skills]", link: "#skills" },
            { label: "[Experience]", hover: "[Experience]", link: "#experience" },
            { label: "[Projects]", hover: "[Projects]", link: "#project" },
            { label: "[Contact]", hover: "[Contact]", link: "#contact" },
          ].map(({ label, hover, link }) => (
            <HashLink
              key={label}
              smooth
              to={`/portfolio_alanawu/${link}`}
              className="relative overflow-hidden group h-10 w-full text-center"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">
                {label}
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">
                {hover}
              </span>
            </HashLink>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 text-gray-400 font-medium text-sm md:text-base justify-end">
        {[
          { label: "[About]", hover: "[I’m Alana!]", link: "#about" },
          { label: "[Skills]", hover: "[Skills]", link: "#skills" },
          { label: "[Experience]", hover: "[Experience]", link: "#experience" },
          { label: "[Projects]", hover: "[Projects]", link: "#project" },
          { label: "[Contact]", hover: "[Contact]", link: "#contact" },
        ].map(({ label, hover, link }) => (
          <HashLink
            key={label}
            smooth
            to={`/portfolio_alanawu/${link}`}
            className="relative overflow-hidden group h-10 w-32 text-center"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">
              {label}
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 text-stone-50">
              {hover}
            </span>
          </HashLink>
        ))}
      </ul>
    </header>
  );
};

export default Header;
