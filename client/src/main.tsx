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
  
  // Favicon - Let index.html handle this to use the correct icon file.
  // let favicon = document.querySelector('link[rel="icon"]');
  // if (!favicon) {
  //   favicon = document.createElement('link');
  //   favicon.setAttribute('rel', 'icon');
  //   document.head.appendChild(favicon);
  // }
  // favicon.setAttribute('href', '/src/assets/icon.png');
  
  // Font imports
  const fontLink = document.createElement('link');
  fontLink.setAttribute('rel', 'stylesheet');
  fontLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
  document.head.appendChild(fontLink);
  
  // Open Graph tags
  const ogTags = [
    { property: 'og:title', content: 'Learn Words' },
    { property: 'og:description', content: 'Master vocabulary in 32 languages with Learn Words app. Interactive flash cards, competitions, and personalized learning paths.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://learnwords.store' },
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
