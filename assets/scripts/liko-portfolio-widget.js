class PortfolioWidget extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Create link to local CSS
    const cssFiles = [
  '../assets/styles/bootstrap.css',
  '../assets/styles/animate.css',
  '../assets/styles/swiper-bundle.css',
  '../assets/styles/slick.css',
  '../assets/styles/magnific-popup.css',
  '../assets/styles/font-awesome-pro.css',
  '../assets/styles/spacing.css',
  '../assets/styles/custom-animation.css',
  '../assets/styles/main.css',
  '../assets/styles/rtl.css'
];

    cssFiles.forEach(href => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', href);
      shadow.appendChild(link);
    });


    // Widget HTML
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="tm-hero-area tm-hero-ptb">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-12">
                        <div class="tm-hero-content">
                           <span class="tm-hero-subtitle">Liko Studio</span>
                           <h4 class="tm-hero-title tp-char-animation">Our latest & great projects</h4>
                        </div>
                        <div class="tm-hero-text">
                           <p class="tp_title_anim">
                              We’re a diverse team that works as fancies attention to
                              details, enjoys beers on Friday nights and aspires to design
                              the dent in the universe.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- hero area end -->

            <!-- portfolio area start -->
            <div class="tp-project-5-2-area pb-130">
               <div class="container">
                  <div class="row gx-140">
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-project-5-2-thumb anim-zoomin-wrap mb-140 p-relative">
                           <a href="portfolio-details-video.html">
                              <img class="anim-zoomin" src="../assets/Images/project-4.jpg" alt="">
                           </a>
                           <div class="tp-project-5-2-category tp_fade_anim">
                              <span>Branding</span>
                           </div>
                           <div class="tp-project-5-2-content tp_fade_anim">
                              <span class="tp-project-5-2-meta">2024</span>
                              <h4 class="tp-project-5-2-title-sm"><a href="portfolio-details-video.html">Art Direction</a></h4>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-project-5-2-thumb anim-zoomin-wrap mb-140 p-relative">
                           <a href="portfolio-details-video.html">
                              <img class="anim-zoomin" src="../assets/Images/project-5.jpg" alt="">
                           </a>
                           <div class="tp-project-5-2-category tp_fade_anim">
                              <span>Branding</span>
                           </div>
                           <div class="tp-project-5-2-content tp_fade_anim">
                              <span class="tp-project-5-2-meta">2024</span>
                              <h4 class="tp-project-5-2-title-sm"><a href="portfolio-details-video.html">Petit Navire</a></h4>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-project-5-2-thumb anim-zoomin-wrap mb-140 p-relative">
                           <a href="portfolio-details-video.html">
                              <img class="anim-zoomin" src="../assets/Images/project-6.jpg" alt="">
                           </a>
                           <div class="tp-project-5-2-category tp_fade_anim">
                              <span>Branding</span>
                           </div>
                           <div class="tp-project-5-2-content tp_fade_anim">
                              <span class="tp-project-5-2-meta">2024</span>
                              <h4 class="tp-project-5-2-title-sm"><a href="portfolio-details-video.html">Big dream</a></h4>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-project-5-2-thumb anim-zoomin-wrap mb-140 p-relative">
                           <a href="portfolio-details-video.html">
                              <img class="anim-zoomin" src="../assets/Images/project-7.jpg" alt="">
                           </a>
                           <div class="tp-project-5-2-category tp_fade_anim">
                              <span>Branding</span>
                           </div>
                           <div class="tp-project-5-2-content tp_fade_anim">
                              <span class="tp-project-5-2-meta">2024</span>
                              <h4 class="tp-project-5-2-title-sm"><a href="portfolio-details-video.html">The Stage</a></h4>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-project-5-2-thumb anim-zoomin-wrap mb-110 p-relative">
                           <a href="portfolio-details-video.html">
                              <img class="anim-zoomin" src="../assets/Images/project-8.jpg" alt="">
                           </a>
                           <div class="tp-project-5-2-category tp_fade_anim">
                              <span>Creative</span>
                           </div>
                           <div class="tp-project-5-2-content tp_fade_anim">
                              <span class="tp-project-5-2-meta">2022</span>
                              <h4 class="tp-project-5-2-title-sm"><a href="portfolio-details-video.html">Big dream</a></h4>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-project-5-2-thumb anim-zoomin-wrap mb-110 p-relative">
                           <a href="portfolio-details-video.html">
                              <img class="anim-zoomin" src="../assets/Images/project-9.jpg" alt="">
                           </a>
                           <div class="tp-project-5-2-category tp_fade_anim">
                              <span>Concept</span>
                           </div>
                           <div class="tp-project-5-2-content tp_fade_anim">
                              <span class="tp-project-5-2-meta">2022</span>
                              <h4 class="tp-project-5-2-title-sm"><a href="portfolio-details-video.html">Sed Lectus</a></h4>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-xl-12">
                        <div class="tp-projct-5-2-btn-box d-flex justify-content-center">
                           <div class="tp-hover-btn-wrapper">
                              <a class="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn" href="portfolio-grid-col-4.html">
                                 <span class="tp-btn-circle-text">More<br>Projects</span>
                                 <span class="tp-btn-circle-icon">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 11L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                       <path d="M1 1H11V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    </svg>
                                 </span>
                                 <i class="tp-btn-circle-dot"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    `;
shadow.appendChild(wrapper);
const loadScripts = (scripts, index = 0) => {
  if (index >= scripts.length) {
    // ✅ Now init animations inside this shadow
    if (typeof initProjectAnimations === "function") {
      initProjectAnimations(shadow);
    }
    return;
  }

  const script = document.createElement('script');
  script.src = scripts[index];
  script.onload = () => loadScripts(scripts, index + 1);
  shadow.appendChild(script);
};
  }
}
customElements.define('portfolio-widget', PortfolioWidget);