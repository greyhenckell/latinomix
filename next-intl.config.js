// next-intl.config.js
module.exports = {
  locales: ["en", "fi"], // Define your supported languages
  defaultLocale: "en", // Set the default language
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dgkcfmvwf/image/upload",
  },
};
