
"use client";

import React from 'react';
import { ThemeToggle } from "@/components/theme-toggle";
import { Rocket } from 'lucide-react'; // Example icon
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="glassmorphism p-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center text-xl font-bold futuristic-text">
        <Rocket className="mr-2" />
        Zynin AI
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/services" className="hover:text-aqua transition-colors">Services</Link>
        <Link href="/team" className="hover:text-aqua transition-colors">Team</Link>
        <Link href="/contact" className="hover:text-aqua transition-colors">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
