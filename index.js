function home() {
  window.location.href= "https://viracresearch.com/trang-chu/";
}

function changeLang(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach((element) => {
    const translations = JSON.parse(element.getAttribute('data-lang'));
    if (translations[lang]) {
      element.textContent = translations[lang];
    }
  });
  const languageIcon = document.getElementById('languageIcon');
  if (lang === 'vi') {
    languageIcon.src = './image/vi.png';
  } else if (lang === 'en') {
    languageIcon.src = './image/en.png';
  }

}

function closeModal(event) {
  const modal = document.querySelector('.modal');
  if (!modal.contains(event.target)) {
    modal.style.display = 'none';
  }
}


$('.openmodale').click(function (e) {
  e.preventDefault();
  $('.modale').addClass('opened');
});
$('.closemodale').click(function (e) {
  e.preventDefault();
  $('.modale').removeClass('opened');
});