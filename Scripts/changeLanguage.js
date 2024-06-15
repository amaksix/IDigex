function changeLanguage(lang) {
    fetch(`Translations/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('selected-language-text').innerText = data.language;
        document.getElementById('about').innerText = data.about;
        document.getElementById('contact').innerText = data.contact;
        document.getElementById('services').innerText = data.services;
        document.getElementById('projects').innerText = data.projects;
        document.getElementById('aboutText').innerText = data.aboutText;
      });
  }

