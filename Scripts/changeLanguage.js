function changeLanguage(lang) {
    fetch(`Translations/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('selected-language-text').innerText = data.language;
      });
  }

