"use client";
// pages/index.js (or the relevant page where you want to add the script)
import { useEffect } from "react";

// import { useEffect } from 'react';

const Google = () => {
  useEffect(() => {
    if (!window.googleTranslateLoaded) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      script.async = true;

      // Avoid duplication by checking if the script already exists in the document
      if (
        !document.querySelector(
          'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
        )
      ) {
        document.head.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        if (!window.google.translate.TranslateElement) {
          return;
        }
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };

      window.googleTranslateLoaded = true;
    }
  }, []);

  return (
    <>
      {/* 
			<h1>My Web Page</h1>
      <p>Hello everybody!</p>
      <p>Translate this page:</p> */}
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          bottom: "30px",
          padding: "10px",
          zIndex: "999",
        }}
      ></div>
    </>
  );
};

export default Google;
