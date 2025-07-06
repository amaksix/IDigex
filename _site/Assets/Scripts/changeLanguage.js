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
        document.getElementById('interfaces-header').innerText = data.interfacesHeader;
        document.getElementById('interfaces-text').innerText = data.interfacesText;
        document.getElementById('design-header').innerText = data.designHeader;
        document.getElementById('design-text').innerText = data.designText;
        document.getElementById('technologies-header').innerText = data.technologiesHeader;
        document.getElementById('technologies-text').innerText = data.technologiesText;
        document.getElementById('3dModelingHeader').innerText = data.modelingHeader;
        document.getElementById('3dModelingText').innerText = data.modelingText;
        document.getElementById('secondServiceDescriptionText').innerHTML = data.modelingDescription;
        document.getElementById('brandBookHeader').innerText = data.brandBookHeader;
        document.getElementById('brandBookDescription').innerText = data.brandBookDescription;
        document.getElementById('thirdServiceDescriptionText').innerHTML = data.thirdServiceDescriptionText;
        document.getElementById('logoHeader').innerText = data.logoHeader;
        document.getElementById('logoDescription').innerText = data.logoDescription;
        document.getElementById('fourthServiceDescriptionText').innerHTML = data.fourthServiceDescriptionText;
        document.getElementById('bannersHeader').innerText = data.bannersHeader;
        document.getElementById('bannersDescription').innerText = data.bannersDescription;
        document.getElementById('fifthServiceDescriptionText').innerHTML = data.fifthServiceDescriptionText;
      });
  }

