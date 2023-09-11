"use client";
import Link from "next/link";
import React,{ useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";;

const navLink = [
  { title: "Sobre mi", path: "#about" },
  { title: "Projectos", path: "#projects" },
  { title: "Contactos", path: "#contac" },
];

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-70 backdrop-blur-sm brightness-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2  border-b border-dotted shadow-md shadow-slate-900 border-b-indigo-900">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {" "}
          LOGO{" "}
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
            >
              <XmarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu block md:auto border-top-30 " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLink.map((link, index) => (
              <li
                key={index}
                
              >
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLink} /> : null}
    </nav>
  );
};
