import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Trash2, Download, Clock, AlertTriangle } from "lucide-react";
import { deletionEn, deletionTr } from "@/data/legalContent";
import MetaTags from "@/components/MetaTags";

const DataDeletion: React.FC = () => {
  const [language, setLanguage] = React.useState<"en" | "tr">("en");
  const content = language === "en" ? deletionEn : deletionTr;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <MetaTags
        title={language === "en" ? "Data Deletion - Learn Words" : "Veri Silme - Learn Words"}
        description={language === "en" 
          ? "Learn how to permanently delete your Learn Words account and personal data. Complete control over your information with 30-day deletion guarantee."
          : "Learn Words hesabınızı ve kişisel verilerinizi kalıcı olarak nasıl sileceğinizi öğrenin. 30 günlük silme garantisiyle verileriniz üzerinde tam kontrol."}
        keywords={language === "en"
          ? "data deletion, delete account, right to erasure, GDPR, data privacy, learn words"
          : "veri silme, hesap silme, unutulma hakkı, GDPR, veri gizliliği, kelime öğrenme"}
        canonical={`https://www.learnwords.store/data-deletion`}
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
              <Trash2 className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {language === "en" ? "Data Deletion" : "Veri Silme"}
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
              <Trash2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Data Deletion Rights" : "Veri Silme Hakları"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "en" 
                ? "You have complete control over your data. Learn how to delete your account and personal information permanently." 
                : "Verileriniz üzerinde tam kontrole sahipsiniz. Hesabınızı ve kişisel bilgilerinizi kalıcı olarak nasıl sileceğinizi öğrenin."}
            </p>
          </motion.div>

          {/* Warning Banner */}
          <motion.div 
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                  {language === "en" ? "Important Notice" : "Önemli Uyarı"}
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  {language === "en" 
                    ? "Data deletion is permanent and cannot be undone. Please export your data before proceeding if you want to keep a personal copy." 
                    : "Veri silme işlemi kalıcıdır ve geri alınamaz. Kişisel bir kopya tutmak istiyorsanız lütfen işleme geçmeden önce verilerinizi dışa aktarın."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Download className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "en" ? "Export Data" : "Veri Dışa Aktar"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {language === "en" 
                  ? "Download your learning progress and personal data before deletion" 
                  : "Silmeden önce öğrenme ilerlemenizi ve kişisel verilerinizi indirin"}
              </p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                {language === "en" ? "Export My Data" : "Verilerimi Dışa Aktar"}
              </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "en" ? "Deletion Timeline" : "Silme Süreci"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {language === "en" 
                  ? "Complete deletion within 30 days of your request" 
                  : "Talebinizden sonra 30 gün içinde tam silme"}
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {language === "en" ? "Immediate → 48h → 7d → 30d" : "Anında → 48s → 7g → 30g"}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Trash2 className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === "en" ? "Delete Account" : "Hesabı Sil"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {language === "en" 
                  ? "Permanently delete your account and all associated data" 
                  : "Hesabınızı ve tüm ilişkili verileri kalıcı olarak silin"}
              </p>
              <a 
                href="mailto:support@learnwords.store?subject=Data Deletion Request"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors inline-block text-center"
              >
                {language === "en" ? "Request Deletion" : "Silme Talebi"}
              </a>
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

          {/* Contact Footer */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {language === "en" 
                  ? "Need help with data deletion? Our privacy team is here to assist you." 
                  : "Veri silme konusunda yardıma mı ihtiyacınız var? Gizlilik ekibimiz size yardımcı olmak için burada."}
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

export default DataDeletion;