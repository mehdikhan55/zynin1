
import React from 'react';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-6 border-t">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Rocket className="mr-2 text-primary" />
          <span>Zynin AI Solutions</span>
        </div>
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Zynin AI Solutions. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-primary transition-colors">
            {/* Social Icon 1 */}
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            {/* Social Icon 2 */}
            Twitter
          </Link>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
