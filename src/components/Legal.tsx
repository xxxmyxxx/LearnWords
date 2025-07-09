import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { 
  termsEn, 
  termsTr, 
  privacyEn, 
  privacyTr, 
  deletionEn, 
  deletionTr, 
  kvkkEn, 
  kvkkTr 
} from "@/data/legalContent";

const Legal: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const [currentTab, setCurrentTab] = useState("terms");

  return (
    <section id="legal" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Legal Information
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Review our terms, privacy policy, and other legal documents.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap mb-6 justify-between items-center">
            <Tabs defaultValue="terms" value={currentTab} onValueChange={setCurrentTab} className="w-full">
              {/* Language selector */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 dark:bg-slate-800 rounded-full p-1 inline-flex">
                  <button 
                    onClick={() => setLanguage("en")}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      language === "en" 
                        ? "bg-white dark:bg-slate-700 shadow-sm" 
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <img src="https://flagcdn.com/w20/gb.png" className="w-5 h-auto" alt="English" />
                      <span>English</span>
                    </div>
                  </button>
                  <button 
                    onClick={() => setLanguage("tr")}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      language === "tr" 
                        ? "bg-white dark:bg-slate-700 shadow-sm" 
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <img src="https://flagcdn.com/w20/tr.png" className="w-5 h-auto" alt="Türkçe" />
                      <span>Türkçe</span>
                    </div>
                  </button>
                </div>
              </div>
              
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
                <TabsTrigger value="terms">{language === "en" ? "Terms of Service" : "Kullanım Koşulları"}</TabsTrigger>
                <TabsTrigger value="privacy">{language === "en" ? "Privacy Policy" : "Gizlilik Politikası"}</TabsTrigger>
                <TabsTrigger value="deletion">{language === "en" ? "Data Deletion" : "Veri Silme"}</TabsTrigger>
                <TabsTrigger value="security">{language === "en" ? "Data Security" : "Veri Güvenliği"}</TabsTrigger>
                {language === "tr" && <TabsTrigger value="kvkk">KVKK Uygunluk</TabsTrigger>}
              </TabsList>

              <TabsContent value="terms" className="border-none p-0">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-gray-700 dark:text-gray-200 h-96 overflow-y-auto">
                  <h3 className="text-xl font-semibold mb-4 font-poppins">
                    {language === "en" ? "Terms of Service (English)" : "Kullanım Koşulları (Türkçe)"}
                  </h3>
                  <div className="space-y-4">
                    {language === "en" ? termsEn.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="mb-4">{item.content}</p>
                      </div>
                    )) : termsTr.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="mb-4">{item.content}</p>
                      </div>
                    ))}
                    <p className="mt-6 italic">
                      {language === "en" ? "Last updated: May 20, 2025" : "Son güncelleme: 20 Mayıs 2025"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="privacy" className="border-none p-0">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-gray-700 dark:text-gray-200 h-96 overflow-y-auto">
                  <h3 className="text-xl font-semibold mb-4 font-poppins">
                    {language === "en" ? "Privacy Policy (English)" : "Gizlilik Politikası (Türkçe)"}
                  </h3>
                  <div className="space-y-4">
                    {language === "en" ? privacyEn.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="mb-4">{item.content}</p>
                      </div>
                    )) : privacyTr.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="mb-4">{item.content}</p>
                      </div>
                    ))}
                    <p className="mt-6 italic">
                      {language === "en" ? "Last updated: May 20, 2025" : "Son güncelleme: 20 Mayıs 2025"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="deletion" className="border-none p-0">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-gray-700 dark:text-gray-200 h-96 overflow-y-auto">
                  <h3 className="text-xl font-semibold mb-4 font-poppins">
                    {language === "en" ? "Data Deletion Policy (English)" : "Veri Silme Politikası (Türkçe)"}
                  </h3>
                  <div className="space-y-4">
                    {language === "en" ? deletionEn.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="mb-4">{item.content}</p>
                      </div>
                    )) : deletionTr.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="mb-4">{item.content}</p>
                      </div>
                    ))}
                    <p className="mt-6 italic">
                      {language === "en" ? "Last updated: May 20, 2025" : "Son güncelleme: 20 Mayıs 2025"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="kvkk" className="border-none p-0">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-gray-700 dark:text-gray-200 h-96 overflow-y-auto">
                  <h3 className="text-xl font-semibold mb-4 font-poppins">
                    {language === "en" ? "KVKK Compliance Statement (English)" : "KVKK Uygunluk Beyanı (Türkçe)"}
                  </h3>
                  <div className="space-y-4">
                    {language === "en" ? kvkkEn.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        {item.isList ? (
                          <ul className="list-disc pl-5 mb-4 space-y-1">
                            {item.listItems?.map((listItem, j) => (
                              <li key={j}>{listItem}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-4">{item.content}</p>
                        )}
                      </div>
                    )) : kvkkTr.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        {item.isList ? (
                          <ul className="list-disc pl-5 mb-4 space-y-1">
                            {item.listItems?.map((listItem, j) => (
                              <li key={j}>{listItem}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-4">{item.content}</p>
                        )}
                      </div>
                    ))}
                    <p className="mt-6 italic">
                      {language === "en" ? "Last updated: May 20, 2025" : "Son güncelleme: 20 Mayıs 2025"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="language" className="border-none p-0">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-gray-700 dark:text-gray-200">
                  <h3 className="text-xl font-semibold mb-4 font-poppins">
                    Language Selection (Dil Seçimi)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-sm transition">
                      <h4 className="font-semibold mb-2">English Documents</h4>
                      <ul className="space-y-2">
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("en"); setCurrentTab("terms"); }}
                          >
                            Terms of Service
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("en"); setCurrentTab("privacy"); }}
                          >
                            Privacy Policy
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("en"); setCurrentTab("deletion"); }}
                          >
                            Data Deletion Policy
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("en"); setCurrentTab("kvkk"); }}
                          >
                            KVKK Compliance Statement
                          </button>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-sm transition">
                      <h4 className="font-semibold mb-2">Türkçe Belgeler</h4>
                      <ul className="space-y-2">
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("tr"); setCurrentTab("terms"); }}
                          >
                            Kullanım Koşulları
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("tr"); setCurrentTab("privacy"); }}
                          >
                            Gizlilik Politikası
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("tr"); setCurrentTab("deletion"); }}
                          >
                            Veri Silme Politikası
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-primary hover:underline"
                            onClick={() => { setLanguage("tr"); setCurrentTab("kvkk"); }}
                          >
                            KVKK Uygunluk Beyanı
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
