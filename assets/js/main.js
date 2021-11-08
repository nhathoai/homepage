let main = (function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {

    if (!select(el, all)) {
      return;
    }

    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }
  /**
   * 
   */
   const openHistory = function (index) {
    let pageHistory = window.location.href.indexOf("company");

    if (pageHistory >= 0) {
      let hash = parseInt(window.location.hash.substr(1));
      let header = select('#header');
      let offset = header.offsetHeight;
      let selectors = select('.office .container .row', true);

      if (!header.classList.contains('header-scrolled')) {
        offset -= 10
      }
      if (index >= 0 || hash >= 0) {
        let top = selectors[index >= 0 ? index : hash].offsetTop;

        window.scrollTo({
          top: top - offset,
          behavior: 'smooth'
        })
      }

    } else {
      if (index >= 0) {
        window.location.href = "./company#" + index;
      }
    }
    return false;
  }

  function loadHtml(nameClassLayout, nameIdTemplate, nameJson) {
    var targetContainer = select("." + nameClassLayout),
      template = select("#" + nameIdTemplate).innerHTML;

    var locale = localStorage.getItem("locale");

    fetch('./assets/json/' + nameJson +'.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {

        var html = Mustache.to_html(template, json[locale ? locale : "ja"]);
        targetContainer.insertAdjacentHTML("afterend", html);
        main.select("#" + nameIdTemplate).outerHTML = "";

        on("click", ".lang a", function (e) {
          localStorage.setItem("lang", e.target.dataset.lang);
          location.reload();
        }, true)

        /**
         * Easy on scroll event listener 
         */
        const onscroll = (el, listener) => {
          el.addEventListener('scroll', listener)
        }

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select('#header')
        if (selectHeader) {
          const headerScrolled = () => {

            if (window.scrollY > 100) {
              selectHeader.classList.add('header-scrolled')
            } else {
              selectHeader.classList.remove('header-scrolled')
            }
            select('.navbar ul').style.top = selectHeader.clientHeight - 4 + "px";
          }
          window.addEventListener('load', headerScrolled)
          onscroll(document, headerScrolled)
        }
        /**
         * Back to top button
         */
        let backtotop = select('.back-to-top')
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active')
            } else {
              backtotop.classList.remove('active')
            }
          }
          window.addEventListener('load', toggleBacktotop)
          onscroll(document, toggleBacktotop)
        }

        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function (e) {
          // select('body').style.overflow = select('#navbar').classList.contains('navbar-mobile')? 'hidden' : '';
          select('#navbar').classList.toggle('navbar-mobile');
          select('#navbar ul').style.top = select("#header").offsetHeight + "px"
          this.classList.toggle('bi-list')
          this.classList.toggle('bi-x')
        })

        /**
         * Mobile nav dropdowns activate
         */
        on('click', '.navbar .dropdown > a', function (e) {
          if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            var eleIcon = e.target.parentNode.querySelectorAll('.bi');
            var ele = select(".dropdown-active");
            ele && (ele != this.nextElementSibling) && ele.classList.toggle('dropdown-active');
            this.nextElementSibling.classList.toggle('dropdown-active');
            eleIcon[0].className = eleIcon[0].classList.contains('bi-chevron-down') ? 'bi bi-chevron-up' : 'bi bi-chevron-down';
          }
        }, true)

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener('load', () => {
          if (window.location.hash) {
            if (select(window.location.hash)) {
              scrollto(window.location.hash)
            }
          }
        });

        /**
         * Animation on scroll
         */
        function aos_init() {
          AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
          });
        }
        window.addEventListener('load', () => {
          aos_init();
        });
        /**
         * swiper
         */
        new Swiper('.hero-slider', {
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          speed: 2000,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: true,
          },
        });

        on('click', '.faq-category .faq-header button', function (e) {
          let index = select('.faq-category .faq-header button', true).indexOf(e.target);
          let eles = select('.faq-content .row', true);
          let header = select('#header');
          let offset = header.offsetHeight;

          if (!header.classList.contains('header-scrolled')) {
            offset -= 10
          }

          let elementPos = eles[index].offsetTop
          window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
          })
        }, true)



        openHistory();
      })
      .catch(function () {
        this.dataError = true;
      })
  }

  return {
    openHistory: openHistory,
    select: select,
    on: on,
    loadHtml: loadHtml
  }
})();
