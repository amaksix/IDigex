function changeLanguage(lang) {
    fetch(`Translations/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('selected-language-text').innerText = data.language;
        document.getElementById('about').innerText = data.about;
        document.getElementById('about-button').innerText = data.about;
        document.getElementById('contact').innerText = data.contact;
        document.getElementById('contact-button').innerText = data.contact;
        document.getElementById('services').innerText = data.ourServices;
        document.getElementById('services-button').innerText = data.services;
        //document.getElementById('projects').innerText = data.projects;
        document.getElementById('projects-button').innerText = data.projects;
        document.getElementById('descriptionText').innerText = data.descriptionText;
        document.getElementById('about-text-first').innerText = data.aboutTextFirst;
        document.getElementById('about-text-second').innerText = data.aboutTextSecond;
        document.getElementById('websites-header').innerText = data.websitesHeader;
        document.getElementById('websites-text').innerText = data.websitesText;
      });
  }

