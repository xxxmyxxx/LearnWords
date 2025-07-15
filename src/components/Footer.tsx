import React from "react";
import LogoIcon from "./LogoIcon";

const features = [
  { name: "Flash Cards", href: "#features" },
  { name: "Competitions", href: "#features" },
  { name: "Progress Tracking", href: "#features" },
];

const legal = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Data Deletion", href: "/data-deletion" },
  { name: "Data Security", href: "/data-security" },
  { name: "KVKK Compliance", href: "/kvkk" },
];

const support = [
  { name: "Contact Us", href: "#contact" },
  { name: "FAQ", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Report an Issue", href: "mailto:support@learnwords.store" },
  { name: "Feedback", href: "mailto:support@learnwords.store" },
];

const social = [
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <LogoIcon size="sm" />
              <h3 className="text-xl font-bold font-poppins">
                Learn<span className="text-primary">Words</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Master vocabulary in 30+ languages through interactive flash cards and personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition"
                  aria-label={item.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon === "twitter" && (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    )}
                    {item.icon === "facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    )}
                    {item.icon === "instagram" && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </>
                    )}
                    {item.icon === "linkedin" && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Features</h4>
            <ul className="space-y-2">
              {features.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(item.href.substring(1));
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Learn Words. All rights reserved.</p>
              <p className="mt-1">
                Learn Words is not affiliated with any language learning institution.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
              <a href="/kvkk" className="hover:text-white transition">KVKK</a>
              <a href="mailto:support@learnwords.store" className="hover:text-white transition">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;