import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr", // your default language
          includedLanguages: "en", // allowed translations
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
