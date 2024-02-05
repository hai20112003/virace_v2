const confirmPassword = document.getElementById("confirmPassword");
const password = document.getElementById("password");
const formChange = document.getElementById('formChange');
let langSelect = "vi";
function showError(input, messageKey, lang) {
  const formControl = input.closest(".form-control");
  formControl.className = 'form-control error';

  const small = formControl.parentElement.querySelector("small");
  small.innerText = getTranslatedMessage(messageKey, lang);
}
function getTranslatedMessage(key, lang) {
  const translation = translations[lang];
  return translation ? translation[key] || key : key;
}
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
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
function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value) {
      showError(input2, "password_mismatch", langSelect);
  }
}
formChange.addEventListener("submit", function (e) {
  e.preventDefault();
  const smallElement = document.getElementsByClassName("error");
  smallElement.innerText = "";
  checkRequired([password, confirmPassword]);
  checkPasswordMatch(password, confirmPassword);
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
}

function closeModal(event) {
  const modal = document.querySelector(".modal");
  if (!modal.contains(event.target)) {
    modal.style.display = "none";
  }
}

const translations = {
  en: {
    password_placeholder: "Enter your password",
    required_field: "Field is required",
    password_mismatch: "Password is incorrect.",
    confirm_pass: "Password re-authentication"
  },
  vi: {
    confirm_pass: "Nhập lại mật khẩu",
    password_placeholder: "Nhập mật khẩu của bạn",
    required_field: "Vui lòng nhập giá trị",
    password_mismatch: "Mật khẩu không đúng."
  },
};

