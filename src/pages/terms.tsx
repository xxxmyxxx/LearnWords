import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Scale, Users, AlertCircle } from "lucide-react";
import { termsEn, termsTr } from "@/data/legalContent";
import MetaTags from "@/components/MetaTags";

const TermsOfService: React.FC = () => {
  const [language, setLanguage] = React.useState<"en" | "tr">("en");
  const content = language === "en" ? termsEn : termsTr;

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <MetaTags
          title={language === "en" ? "Terms of Service - Learn Words" : "Kullanım Koşulları - Learn Words"}
          description={language === "en" 
            ? "Review Learn Words' terms of service including user rights, fair usage guidelines, and important policies for our language learning platform."
            : "Learn Words'ün kullanım koşullarını inceleyin: kullanıcı hakları, adil kullanım kılavuzları ve dil öğrenme platformumuz için önemli politikalar."}
          keywords={language === "en"
            ? "terms of service, user agreement, fair usage, learn words, language learning"
            : "kullanım koşulları, kullanıcı sözleşmesi, adil kullanım, kelime öğrenme, dil öğrenme"}
          canonical={`https://www.learnwords.store/terms`}
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
              <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <Scale className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {language === "en" ? "Terms of Service" : "Kullanım Koşulları"}
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Terms of Service" : "Kullanım Koşulları"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "en" 
                ? "These terms govern your use of Learn Words and help ensure a safe, fair experience for everyone." 
                : "Bu koşullar Learn Words kullanımınızı yönetir ve herkes için güvenli, adil bir deneyim sağlamaya yardımcı olur."}
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "en" ? "User Rights" : "Kullanıcı Hakları"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === "en" 
                  ? "Your rights and responsibilities when using our language learning platform" 
                  : "Dil öğrenme platformumuzu kullanırken sahip olduğunuz hak ve sorumluluklar"}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Scale className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "en" ? "Fair Usage" : "Adil Kullanım"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === "en" 
                  ? "Guidelines for responsible and respectful use of our services" 
                  : "Hizmetlerimizin sorumlu ve saygılı kullanımı için kılavuzlar"}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <AlertCircle className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "en" ? "Important Notes" : "Önemli Notlar"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === "en" 
                  ? "Key policies regarding payments, data protection, and account management" 
                  : "Ödemeler, veri koruması ve hesap yönetimi ile ilgili temel politikalar"}
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
                  ? "Have questions about these terms? Contact our support team." 
                  : "Bu koşullar hakkında sorularınız mı var? Destek ekibimizle iletişime geçin."}
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
  );
};

export default TermsOfService;