"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        //logo
        <Link href="/" className="text-2xl font-bold text-red-950">
          Haat Ma Kanun
        </Link>

        //Desktop menu
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/laws" className="hover:text-blue-600">
              Laws
            </Link>
          </li>
          <li>
            <Link href="/regulations" className="hover:text-blue-600">
              Regulations
            </Link>
          </li>
          <li>
            <Link href="/guides" className="hover:text-blue-600">
              Guides
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>

        //translate
        

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li>
              <Link href="/laws" onClick={() => setIsOpen(false)}>
                Laws
              </Link>
            </li>
            <li>
              <Link href="/regulations" onClick={() => setIsOpen(false)}>
                Regulations
              </Link>
            </li>
            <li>
              <Link href="/guides" onClick={() => setIsOpen(false)}>
                Guides
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
