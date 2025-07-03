const translations = {
  zh: {
    about: "關於我們",
    announcement: "公告",
    download: "下載",
    welcome: "歡迎來到天禾工作室論壇！請選擇上方的模塊開始。"
  },
  en: {
    about: "About Us",
    announcement: "Announcement",
    download: "Download",
    welcome: "Welcome to the TianHe Studio Forum! Please select a module above to begin."
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}
