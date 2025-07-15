import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, Clock } from "lucide-react";
import { privacyEn, privacyTr } from "@/data/legalContent";
import MetaTags from "@/components/MetaTags";

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = React.useState<"en" | "tr">("en");
  const content = language === "en" ? privacyEn : privacyTr;

  return (
    <>
      <MetaTags
        title={language === "en" ? "Privacy Policy - Learn Words" : "Gizlilik Politikası - Learn Words"}
        description={language === "en" 
          ? "Learn how Learn Words protects your personal information with industry-leading privacy practices and transparent data policies."
          : "Learn Words'ün endüstri lideri gizlilik uygulamaları ve şeffaf veri politikalarıyla kişisel bilgilerinizi nasıl koruduğunu öğrenin."}
        keywords={language === "en"
          ? "privacy policy, data protection, personal information, GDPR, CCPA, KVKK, learn words"
          : "gizlilik politikası, veri koruması, kişisel bilgiler, GDPR, CCPA, KVKK, kelime öğrenme"}
        canonical={`https://learnwords.store/privacy`}
        language={language}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Header */}
        <div className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === "en" ? "Privacy Policy" : "Gizlilik Politikası"}
                </h1>
              </div>

              {/* Language Toggle */}
              <div className="bg-gray-100 dark:bg-slate-800 rounded-full p-1 inline-flex">
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
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {language === "en" ? "Your Privacy Matters" : "Gizliliğiniz Önemli"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "en" 
                  ? "We're committed to protecting your personal information and being transparent about how we use it." 
                  : "Kişisel bilgilerinizi koruma ve bunları nasıl kullandığımız konusunda şeffaf olma taahhüdündeyiz."}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="grid md:grid-cols-3 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Lock className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "en" ? "Data Security" : "Veri Güvenliği"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" 
                    ? "AES-256 encryption and industry-leading security measures" 
                    : "AES-256 şifreleme ve endüstri lideri güvenlik önlemleri"}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Shield className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "en" ? "Your Rights" : "Haklarınız"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" 
                    ? "Access, correct, delete, or export your data anytime" 
                    : "Verilerinize istediğiniz zaman erişin, düzeltin, silin veya dışa aktırın"}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "en" ? "Data Retention" : "Veri Saklama"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" 
                    ? "We only keep data as long as necessary for service" 
                    : "Verileri yalnızca hizmet için gerekli olduğu sürece saklarız"}
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
                        {section.content}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {language === "en" 
                    ? "Questions about our privacy practices? We're here to help." 
                    : "Gizlilik uygulamalarımız hakkında sorularınız mı var? Size yardımcı olmak için buradayız."}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a 
                    href="mailto:support@learnwords.store" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    support@learnwords.store
                  </a>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  {language === "en" ? "Last updated: July 15, 2025" : "Son güncelleme: 15 Temmuz 2025"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;