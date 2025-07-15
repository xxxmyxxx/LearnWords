import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Shield, Server, Key, Eye, AlertCircle } from "lucide-react";
import { dataSecurityEn, dataSecurityTr } from "@/data/legalContent";
import MetaTags from "@/components/MetaTags";

const DataSecurity: React.FC = () => {
  const [language, setLanguage] = React.useState<"en" | "tr">("en");
  const content = language === "en" ? dataSecurityEn : dataSecurityTr;

  return (
    <>
      <MetaTags
        title={language === "en" ? "Data Security - Learn Words" : "Veri Güvenliği - Learn Words"}
        description={language === "en" 
          ? "Learn about Learn Words' enterprise-grade security measures including AES-256 encryption, 24/7 monitoring, and SOC 2 compliance."
          : "Learn Words'ün AES-256 şifreleme, 7/24 izleme ve SOC 2 uyumluluğu dahil kurumsal sınıf güvenlik önlemleri hakkında bilgi edinin."}
        keywords={language === "en"
          ? "data security, encryption, AES-256, TLS SSL, SOC 2, security monitoring, cybersecurity"
          : "veri güvenliği, şifreleme, AES-256, TLS SSL, SOC 2, güvenlik izleme, siber güvenlik"}
        canonical={`https://learnwords.store/data-security`}
        language={language}
      />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
                <Lock className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === "en" ? "Data Security" : "Veri Güvenliği"}
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {language === "en" ? "Enterprise-Grade Security" : "Kurumsal Düzey Güvenlik"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "en" 
                  ? "Your data is protected with military-grade encryption and industry-leading security measures." 
                  : "Verileriniz askeri sınıf şifreleme ve endüstri lideri güvenlik önlemleriyle korunmaktadır."}
              </p>
            </motion.div>

            {/* Security Features */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <Key className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  AES-256
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Military-grade encryption" : "Askeri sınıf şifreleme"}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <Server className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  TLS/SSL
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Secure data transmission" : "Güvenli veri iletimi"}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <Eye className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  24/7
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Security monitoring" : "Güvenlik izleme"}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  SOC 2
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Compliance audits" : "Uyumluluk denetimleri"}
                </p>
              </div>
            </motion.div>

            {/* Security Standards */}
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 mb-8 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {language === "en" ? "Security Certifications" : "Güvenlik Sertifikaları"}
                  </h3>
                  <p className="opacity-90">
                    {language === "en" 
                      ? "We comply with international security standards and undergo regular audits" 
                      : "Uluslararası güvenlik standartlarına uyuyoruz ve düzenli denetimlerden geçiyoruz"}
                  </p>
                </div>
                <div className="hidden md:flex space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-lg font-bold">ISO</div>
                    <div className="text-sm opacity-90">27001</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-lg font-bold">SOC</div>
                    <div className="text-sm opacity-90">Type II</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-lg font-bold">GDPR</div>
                    <div className="text-sm opacity-90">Compliant</div>
                  </div>
                </div>
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

            {/* Security Contact */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {language === "en" 
                    ? "Found a security vulnerability? Report it responsibly through our security disclosure program." 
                    : "Güvenlik açığı buldunuz mu? Sorumlu güvenlik açıklama programımız aracılığıyla bildirin."}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a 
                    href="mailto:support@learnwords.store" 
                    className="text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    support@learnwords.store
                  </a>
                  <span className="text-gray-400">•</span>
                  <a 
                    href="/security" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {language === "en" ? "Security Program" : "Güvenlik Programı"}
                  </a>
                  <span className="text-gray-400">•</span>
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

export default DataSecurity;