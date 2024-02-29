const confirmPassword = document.getElementById("confirmPassword");
const password = document.getElementById("password");
const formChange = document.getElementById('formChange');
const lang = localStorage.getItem("lang");
let open_modal_lang = true;
let langSelect = "vi";

function home() {
  window.location.href = "https://viracresearch.com/trang-chu/";
}

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


modal_logout = true;
function close_modal_true() {
  const modal = document.querySelector("#modal_logout");
  modal.style.display = "none";
}
function open_modal_logout_true() {
  if (modal_logout) {
    const modal = document.querySelector("#modal_logout");
    modal.style.display = "block";
    setTimeout(function() {
      window.location.href = "http://127.0.0.1:5500/page/login/index.html";
    }, 2000);
  }
}
