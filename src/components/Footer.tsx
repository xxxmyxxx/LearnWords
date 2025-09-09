import React from "react";
import LogoIcon from "./LogoIcon";

const features = [
  { name: "Flash Cards", href: "#features" },
  { name: "Competitions", href: "#features" },
  { name: "Progress Tracking", href: "#features" },
];

const legal = [
  { name: "Terms of Service", href: "https://www.learnwords.store/terms" },
  { name: "Privacy Policy", href: "https://www.learnwords.store/privacy" },
  { name: "Data Deletion", href: "https://www.learnwords.store/data-deletion" },
  { name: "Data Security", href: "https://www.learnwords.store/data-security" },
  { name: "KVKK Compliance", href: "https://www.learnwords.store/kvkk" },
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
            
            {/* Store Download Links */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-white mb-3">Download App</h5>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://apps.apple.com/us/app/learn-words-vocabulary-battle/id6742398903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white transition text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                  </svg>
                  Download on App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mygkstudio.learnwords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white transition text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path>
                  </svg>
                  Get it on Google Play
                </a>
              </div>
            </div>
            
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
              <p className="mt-1">
                <strong>İşletme Sahibi:</strong> Mustafa Yıldız
              </p>
              <p className="mt-1">
                <strong>İletişim:</strong> support@learnwords.store
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="https://www.learnwords.store/privacy" className="hover:text-white transition">Privacy</a>
              <a href="https://www.learnwords.store/terms" className="hover:text-white transition">Terms</a>
              <a href="https://www.learnwords.store/kvkk" className="hover:text-white transition">KVKK</a>
              <a href="mailto:support@learnwords.store" className="hover:text-white transition">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;