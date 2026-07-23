import { useEffect } from 'react';
import { siteConfig } from './config';
import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import IframeSection from './components/IframeSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const { favicon, titleColor, hero, text, widget, gallery, contact, footer } = siteConfig;

  useEffect(() => {
    if (favicon) {
      const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (link) link.href = favicon;
    }
  }, [favicon]);

  return (
    <div className="min-h-screen flex flex-col gap-3 md:gap-0 px-3 md:px-0 py-3 md:py-0 bg-gray-100 md:bg-transparent">
      <HeroSection {...hero} />
      <TextSection paragraphs={text.paragraphs} />
      <IframeSection title={widget.title} titleColor={titleColor} embedHtml={widget.embedHtml} dflink={widget.dflink} />
      <GallerySection title={gallery.title} images={gallery.images} titleColor={titleColor} />
      <ContactSection {...contact} />
      <FooterSection {...footer} />
    </div>
  );
}
