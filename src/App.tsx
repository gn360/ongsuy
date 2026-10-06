import { useEffect } from 'react';
import { siteConfig } from './config';
import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import IframeSection from './components/IframeSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const { favicon, hero, text, widget, gallery, contact, footer } = siteConfig;

  const organizationName = hero.organizationName;

  useEffect(() => {
    document.title = organizationName;
  }, [organizationName]);

  useEffect(() => {
    if (favicon) {
      const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (link) link.href = favicon;
    }
  }, [favicon]);

  return (
    <div className="min-h-screen flex flex-col gap-3 md:gap-0 bg-white">
      <div className="px-5 md:px-0 py-3 md:py-0">
        <HeroSection {...hero} />
        <TextSection title={text.title} paragraphs={text.paragraphs} />
        <IframeSection title={widget.title} embedHtml={widget.embedHtml} dflink={widget.dflink} />
      </div>
      <GallerySection title={gallery.title} video_url={gallery.video_url} text={gallery.text} images={gallery.images} />
      <ContactSection {...contact} />
      <FooterSection {...footer} />
    </div >
  );
}
