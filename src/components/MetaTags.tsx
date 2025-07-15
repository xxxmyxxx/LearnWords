import React from "react";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  language?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonical,
  language = "en"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      const ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOgTag('og:title', ogTitle || title);
    updateOgTag('og:description', ogDescription || description);
    updateOgTag('og:type', 'website');
    updateOgTag('og:site_name', 'Learn Words');

    // Update canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // Update language
    document.documentElement.lang = language;

    // Cleanup function
    return () => {
      // Optional: Clean up meta tags when component unmounts
    };
  }, [title, description, keywords, ogTitle, ogDescription, canonical, language]);

  return null; // This component doesn't render anything
};

export default MetaTags;