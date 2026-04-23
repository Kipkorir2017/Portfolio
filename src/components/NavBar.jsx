import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-500";

  return (
    <nav className="h-20 flex items-center justify-between px-6 md:px-10 shadow-md fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50">

      {/* Logo */}
      <h1 className="text-lg md:text-xl font-bold">
        Benjamin Kipkorir
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/folio" className={linkClass}>Folio</NavLink></li>
        <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
      </ul>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full"
        >
          {dark ? "🌙" : "☀️"}
        </button>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/" className={linkClass}>Home</NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/folio" className={linkClass}>Folio</NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/about" className={linkClass}>About</NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </li>

          </ul>
        </div>
      )}

    </nav>
  );
}