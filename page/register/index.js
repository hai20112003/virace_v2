const email = document.getElementById("email");
const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const company = document.getElementById("company");
const phoneNumber = document.getElementById("phoneNumber");
const presenter = document.getElementById("presenter");

const formRegister = document.getElementById("formRegister");
let langSelect = "vi";
function showError(input, messageKey, lang) {
  const formControl = input.closest(".form-control");
  console.log(formControl);
  formControl.classList.add("error");
  
  const small = formControl.parentElement.querySelector("small");
  console.log(small);
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


function checkPhone(input) {
  const re =
  /^(?:(?:\+|0{0,2})84|0[3|5|7|8|9]|84)(?:\d{8}|(\d{7}))+$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "phone_number_invalid", langSelect);
  }
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequired(inputArr) {
  console.log(inputArr);
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "required_field", langSelect);
    } else {
      showSucces(input);
    }
  });
}
formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  const smallElement = document.getElementsByClassName("error");
  console.log(smallElement);
  smallElement.innerText = "";
  checkRequired([email, phoneNumber, lastName, firstName]);
  checkPhone(phoneNumber);
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
function news() {
  window.location.href = "http://online.gov.vn/Home/WebDetails/86982?AspxAutoDetectCookieSupport=1";
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
}

function closeModal(event) {
  const modal = document.querySelector(".modal");
  if (!modal.contains(event.target)) {
    modal.style.display = "none";
  }
}

const translations = {
  en: {
    email_placeholder: "Enter your email",
    email_invalid: "Email is not valid",
    phone_number_invalid: "Phone number is not valid",
    required_field: "Field is required",
    phoneNumber_placeholder: "Enter phone number",
    lastName: "Last name",
    firstName: "First name",
    company: "Company / Place of work",
    presenter: "References Email"
  },
  vi: {
    email_placeholder: "Nhập email của bạn",
    phoneNumber_placeholder: "Nhập số điện thoại của bạn",
    lastName: "Họ",
    firstName: "Tên",
    presenter: "Email người giới thiệu",
    company: "Công ty/ Nơi công tác",
    email_invalid: "Email không hợp lệ",
    required_field: "Vui lòng nhập giá trị",
    phone_number_invalid: "Số điện thoại không hợp lệ",
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
$('.openmodale').click(function (e) {
  e.preventDefault();
  $('.modale_disclaimer').addClass('opened');
});
$('.closemodale').click(function (e) {
  e.preventDefault();
  $('.modale_disclaimer').removeClass('opened');
});


$('.confidentiality').click(function (e) {
  e.preventDefault();
  $('.modale_confidentiality').addClass('opened');
});
$('.closemodale').click(function (e) {
  e.preventDefault();
  $('.modale_confidentiality').removeClass('opened');
});


function news() {
  window.location.href = "http://online.gov.vn/Home/WebDetails/86982?AspxAutoDetectCookieSupport=1";
}