function home() {
  window.location.href = "https://viracresearch.com/trang-chu/";
}
let open_modal_lang = true;
const lang = localStorage.getItem("lang");
const translations = {
  en: {
    input_placeholder: "Input question(s)...",
  },
  vi: {
    input_placeholder: "Nhập các câu hỏi cần hỏi...",
  },
};
function changeLang(lang) {
  langSelect = lang;
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const translations = JSON.parse(element.getAttribute("data-lang"));
    if (translations[lang]) {
      element.textContent = translations[lang];
    }
  });
  const languageIcon = document.getElementById("languageIcon");
  if (lang === "vi") {
    languageIcon.src = "./../../image/vi.png";
  } else if (lang === "en") {
    languageIcon.src = "./../../image/en.png";
  }
  const elementsInput = document.querySelectorAll("[data-translate]");
  elementsInput.forEach((element) => {
    const key = element.dataset.translate;
    element.placeholder = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
  closeModal();
}

function openModal() {
  const modal = document.querySelector(".modal");
  if(open_modal_lang){
    open_modal_lang = false  
    modal.style.display = "block";
  } else{
    open_modal_lang = true  
    modal.style.display = "none";
  }
}
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function news() {
  window.location.href = "http://online.gov.vn/Home/WebDetails/86982?AspxAutoDetectCookieSupport=1";
}

if (lang) {
  changeLang(lang);
} else {
  changeLang("vi");
}


