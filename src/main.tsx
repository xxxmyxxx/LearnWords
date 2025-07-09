import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Meta elements for SEO
const updateMetaTags = () => {
  document.title = "Learn Words";
  
  // Description meta tag
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', 'Master vocabulary in 32 languages with Learn Words app. Interactive flash cards, competitions, and personalized learning paths.');
  
  // Font preconnect for performance
  const preconnectGoogle = document.createElement('link');
  preconnectGoogle.setAttribute('rel', 'preconnect');
  preconnectGoogle.setAttribute('href', 'https://fonts.googleapis.com');
  document.head.appendChild(preconnectGoogle);
  
  const preconnectGstatic = document.createElement('link');
  preconnectGstatic.setAttribute('rel', 'preconnect');
  preconnectGstatic.setAttribute('href', 'https://fonts.gstatic.com');
  preconnectGstatic.setAttribute('crossorigin', '');
  document.head.appendChild(preconnectGstatic);
  
  // Font imports - non-blocking
  const fontLink = document.createElement('link');
  fontLink.setAttribute('rel', 'stylesheet');
  fontLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
  fontLink.setAttribute('media', 'print');
  fontLink.setAttribute('onload', "this.media='all'");
  document.head.appendChild(fontLink);
  
  // Open Graph tags
  const ogTags = [
    { property: 'og:title', content: 'Learn Words' },
    { property: 'og:description', content: 'Master vocabulary in 32 languages with Learn Words app. Interactive flash cards, competitions, and personalized learning paths.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://xxxmyxxx.github.io/LearnWords/' },
  ];
  
  ogTags.forEach(tag => {
    let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', tag.content);
  });
};

updateMetaTags();

createRoot(document.getElementById("root")!).render(<App />);
