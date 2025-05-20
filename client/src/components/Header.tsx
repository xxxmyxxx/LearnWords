import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LogoIcon from "./LogoIcon";
import { scrollToElement } from "@/lib/utils";
import { X, Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (elementId: string) => {
    scrollToElement(elementId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center">
            <LogoIcon />
            <h1 className="text-xl ml-2 font-bold text-foreground dark:text-white font-poppins">
              Learn<span className="text-primary">Words</span>
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick("features")}
            className="font-medium text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick("languages")}
            className="font-medium text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          >
            Languages
          </button>
          <button
            onClick={() => handleNavClick("legal")}
            className="font-medium text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          >
            Legal
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="font-medium text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          >
            Contact
          </button>
          <Button
            onClick={() => handleNavClick("download")}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Download App
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick("features")}
              className="font-medium py-2 text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("languages")}
              className="font-medium py-2 text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Languages
            </button>
            <button
              onClick={() => handleNavClick("legal")}
              className="font-medium py-2 text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Legal
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="font-medium py-2 text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Contact
            </button>
            <Button
              onClick={() => handleNavClick("download")}
              className="bg-primary text-white hover:bg-primary/90 w-full"
            >
              Download App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
