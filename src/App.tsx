import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import IframeSection from './components/IframeSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col gap-3 md:gap-0 px-3 md:px-0 py-3 md:py-0 bg-gray-100 md:bg-transparent">
      <HeroSection />
      <TextSection />
      <IframeSection
        embedHtml={`
          <div id="df-donation-form"></div>
          <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
          <script
            src="https://donafacil.uy/embed/donation-form.js"
            data-slug="casa-amiga-grupo-oncologico-vivir-mejor-20251009113226"
            data-sku="GHR2JRGZ"
          ></script>
        `}
      />
    
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
