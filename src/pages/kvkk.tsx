import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, CheckCircle, FileText, Users } from "lucide-react";
import { kvkkTr, kvkkEn } from "@/data/legalContent";
import MetaTags from "@/components/MetaTags";

const KVKKCompliance: React.FC = () => {
  const [language, setLanguage] = React.useState<"tr" | "en">("tr");
  const content = language === "tr" ? kvkkTr : kvkkEn;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <MetaTags
        title={language === "tr" ? "KVKK Uyumluluğu - Learn Words" : "KVKK Compliance - Learn Words"}
        description={language === "tr" 
          ? "Learn Words'ün 6698 sayılı Kişisel Verilerin Korunması Kanunu'na tam uyumluluğu. Veri sahibi hakları, güvenlik önlemleri ve şeffaflık."
          : "Learn Words' full compliance with Turkey's Personal Data Protection Law No. 6698. Data subject rights, security measures, and transparency."}
        keywords={language === "tr"
          ? "KVKK, kişisel verilerin korunması, veri sahibi hakları, veri güvenliği, şeffaflık"
          : "KVKK, personal data protection, data subject rights, data security, transparency"}
        canonical={`https://www.learnwords.store/kvkk`}
        language={language}
      />
      {/* Header */}
      <div className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {language === "tr" ? "KVKK Uyumluluğu" : "KVKK Compliance"}
              </h1>
            </div>

            {/* Language Toggle */}
            <div className="bg-gray-100 dark:bg-slate-800 rounded-full p-1 inline-flex">
              <button 
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "tr" 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-primary" 
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                TR
              </button>
              <button 
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "en" 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-primary" 
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "tr" ? "KVKK Uyumluluğu" : "KVKK Compliance"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "tr" 
                ? "6698 sayılı Kişisel Verilerin Korunması Kanunu'na tam uyumluluk için aldığımız önlemler ve uyguladığımız politikalar." 
                : "The measures we take and policies we implement for full compliance with Personal Data Protection Law No. 6698."}
            </p>
          </motion.div>

          {/* KVKK Badge */}
          <motion.div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 mb-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">
              {language === "tr" ? "KVKK Uyumlu" : "KVKK Compliant"}
            </h3>
            <p className="opacity-90">
              {language === "tr" 
                ? "Learn Words, Türkiye Cumhuriyeti KVKK gerekliliklerine tam uyum sağlamaktadır" 
                : "Learn Words fully complies with the Republic of Turkey KVKK requirements"}
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "tr" ? "Veri Sahibi Hakları" : "Data Subject Rights"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === "tr" 
                  ? "KVKK Madde 11 kapsamında tüm haklarınızı tam olarak destekliyoruz" 
                  : "We fully support all your rights under KVKK Article 11"}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "tr" ? "Güvenlik Önlemleri" : "Security Measures"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === "tr" 
                  ? "KVKK'nın gerektirdiği teknik ve idari güvenlik önlemleri" 
                  : "Technical and administrative security measures required by KVKK"}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <FileText className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "tr" ? "Şeffaflık" : "Transparency"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === "tr" 
                  ? "Veri işleme faaliyetlerimizde tam şeffaflık ve hesap verebilirlik" 
                  : "Complete transparency and accountability in our data processing activities"}
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {content.map((section, index) => (
                  <motion.div 
                    key={index}
                    className="mb-8 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      {section.title}
                    </h3>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed pl-11">
                      {section.isList ? (
                        <ul className="list-disc ml-6 space-y-2">
                          {section.listItems?.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        section.content
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Footer */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {language === "tr" 
                  ? "KVKK haklarınızı kullanmak veya sorularınız için bizimle iletişime geçin." 
                  : "Contact us to exercise your KVKK rights or for any questions."}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a 
                  href="mailto:support@learnwords.store" 
                  className="text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  support@learnwords.store
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                {language === "tr" ? "Son güncelleme: 15 Temmuz 2025" : "Last updated: July 15, 2025"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KVKKCompliance;