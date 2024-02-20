const email = document.getElementById("email");
const password = document.getElementById("password");
const formLogin = document.getElementById("formLogin");
let langSelect = "vi";
const lang = localStorage.getItem("lang");
function showError(input, messageKey, lang) {
  const formControl = input.closest(".form-control");
  formControl.classList.add("error");

  const small = formControl.parentElement.querySelector("small");
  small.innerText = getTranslatedMessage(messageKey, lang);
}
function getTranslatedMessage(key, lang) {
  const translation = translations[lang];
  return translation ? translation[key] || key : key;
}
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "email_invalid", langSelect);
  }
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "required_field", langSelect);
    } else {
      showSucces(input);
    }
  });
}
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  const smallElement = document.getElementsByClassName("error");
  smallElement.innerText = "";
  checkRequired([email, password]);
  checkEmail(email);
});
function clickIsChecked(isChecked) {
  const falseElement = document.querySelector(".false");
  const trueElement = document.querySelector(".true");
  if (isChecked) {
    falseElement.style.display = "none";
    trueElement.style.display = "block";
  } else {
    falseElement.style.display = "block";
    trueElement.style.display = "none";
  }
}

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
  modal.style.display = "block";
}
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

const translations = {
  en: {
    email_placeholder: "Enter your email",
    password_placeholder: "Enter your password",
    email_invalid: "Email is not valid",
    required_field: "Field is required",
  },
  vi: {
    email_placeholder: "Nhập email của bạn",
    password_placeholder: "Nhập mật khẩu của bạn",
    email_invalid: "Email không hợp lệ",
    required_field: "Vui lòng nhập giá trị",
  },
};

function togglePasswordType() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

$(".openmodale").click(function (e) {
  e.preventDefault();
  $(".modale_disclaimer").addClass("opened");
});
$(".closemodale").click(function (e) {
  e.preventDefault();
  $(".modale_disclaimer").removeClass("opened");
});

$(".confidentiality").click(function (e) {
  e.preventDefault();
  $(".modale_confidentiality").addClass("opened");
});
$(".closemodale").click(function (e) {
  e.preventDefault();
  $(".modale_confidentiality").removeClass("opened");
});
$(".copyright_open").click(function (e) {
  e.preventDefault();
  $(".modale_copyright").addClass("opened");
});
$(".closemodale").click(function (e) {
  e.preventDefault();
  $(".modale_copyright").removeClass("opened");
});
function news() {
  window.location.href =
    "http://online.gov.vn/Home/WebDetails/86982?AspxAutoDetectCookieSupport=1";
}

if (lang) {
  changeLang(lang);
} else {
  changeLang("vi");
}
