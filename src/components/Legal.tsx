import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  FileText, 
  Trash2, 
  Lock, 
  Scale,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const Legal: React.FC = () => {
  const legalPages = [
    {
      title: "Privacy Policy",
      titleTr: "Gizlilik Politikası",
      description: "How we collect, use, and protect your personal information",
      descriptionTr: "Kişisel bilgilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz",
      icon: Shield,
      href: "/privacy",
      color: "blue"
    },
    {
      title: "Terms of Service",
      titleTr: "Kullanım Koşulları",
      description: "Rules and guidelines for using Learn Words",
      descriptionTr: "Learn Words kullanım kuralları ve kılavuzları",
      icon: Scale,
      href: "/terms",
      color: "green"
    },
    {
      title: "Data Deletion",
      titleTr: "Veri Silme",
      description: "Your right to delete your account and personal data",
      descriptionTr: "Hesabınızı ve kişisel verilerinizi silme hakkınız",
      icon: Trash2,
      href: "/data-deletion",
      color: "red"
    },
    {
      title: "Data Security",
      titleTr: "Veri Güvenliği",
      description: "How we protect your data with enterprise-grade security",
      descriptionTr: "Verilerinizi kurumsal sınıf güvenlik ile nasıl koruduğumuz",
      icon: Lock,
      href: "/data-security",
      color: "cyan"
    },
    {
      title: "KVKK Compliance",
      titleTr: "KVKK Uyumluluğu",
      description: "Our compliance with Turkey's Personal Data Protection Law",
      descriptionTr: "Türkiye Kişisel Verilerin Korunması Kanunu'na uyumluluğumuz",
      icon: FileText,
      href: "/kvkk",
      color: "purple"
    }
  ];

  const [language, setLanguage] = React.useState<"en" | "tr">("en");

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "text-blue-500",
      green: "text-green-500", 
      red: "text-red-500",
      cyan: "text-cyan-500",
      purple: "text-purple-500"
    };
    return colors[color] || "text-blue-500";
  };

  const getHoverClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800",
      green: "hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-800",
      red: "hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-800",
      cyan: "hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-200 dark:hover:border-cyan-800",
      purple: "hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-800"
    };
    return colors[color] || "hover:bg-blue-50 dark:hover:bg-blue-900/20";
  };

  return (
    <section id="legal" className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {language === "en" ? "Legal Information" : "Yasal Bilgiler"}
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === "en" 
              ? "Transparency and trust are fundamental to our relationship with you. Review our comprehensive legal documents."
              : "Şeffaflık ve güven sizinle ilişkimizin temelidir. Kapsamlı yasal belgelerimizi inceleyin."}
          </motion.p>

          {/* Language Toggle */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-100 dark:bg-slate-800 rounded-full p-1 inline-flex shadow">
              <button 
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all
                  ${language === "en" 
                    ? "bg-white dark:bg-slate-700 shadow text-primary ring-2 ring-primary/30" 
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                <span className="inline-flex items-center gap-1">
                  <span className="text-xl">🇬🇧</span>
                  English
                </span>
              </button>
              <button 
                onClick={() => setLanguage("tr")}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all
                  ${language === "tr" 
                    ? "bg-white dark:bg-slate-700 shadow text-primary ring-2 ring-primary/30" 
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                <span className="inline-flex items-center gap-1">
                  <span className="text-xl">🇹🇷</span>
                  Türkçe
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {legalPages.map((page, index) => {
              const Icon = page.icon;
              return (
                <motion.a
                  key={page.href}
                  href={page.href}
                  className={`block bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 transition-all duration-300 ${getHoverClasses(page.color)} group`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-700 ${getColorClasses(page.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {language === "en" ? page.title : page.titleTr}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
                    {language === "en" ? page.description : page.descriptionTr}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;