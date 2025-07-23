'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Add shadow after scrolling 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (  
    <>
    <nav className={`navbar transition-colors duration-300 sticky bg-base-100/90 top-0 z-30 w-full [transform:translate3d(0,0,0)] backdrop-blur transition-shadow duration-100 px-4 ${
        isScrolled ? "shadow-xs" : ""
      }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link href="/starterplus" className="font-medium flex items-center gap-4">
          <span className="text-nowrap">Starter Plus</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeSwitcher/>
        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar avatar-online avatar-placeholder rounded-xl text-2xl hover:scale-110 transition-transform duration-300">
            <div className="text-base-100 bg-base-content w-8 mask mask-squircle">
              <span className="text-lg">R</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 border border-white/5 shadow-2xl outline-1 outline-black/5">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-sm badge-neutral">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
      </div>
    </nav>
    </>
  );
}
