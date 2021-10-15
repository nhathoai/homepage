(function () {
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
  // select("#header").outerHTML = '';
  
  select("#footer").outerHTML = '<!-- ======= Footer ======= --> <footer id="footer" class="footer"> <div class="footer-top"> <div class="container"> <img src="assets/img/logo.svg" alt=""> <div class="row gy-4"> <div class="col-lg-5 col-md-12 col-sm-12 footer-info"> <p class="name">PASONA TECH VIETNAM CO., LTD.</p> <p class="mail">inquiry@vn.pasonatech.co.jp</p> <a href="tel:0842838127150"> <p>ITO/BPO： +84-28-3812-7150</p> </a> <a href="tel:084934881804"> <p>HR: +84-934-881-804 (Japanese )</p> </a> <a href="tel:084909053904"> <p>HR: +84-909-053-904 (Vietnamese)</p> </a> </div> <div class=" footer-links-par col-lg-7 col-md-12  col-sm-12 d-flex justify-content-between"> <div class="footer-links  "> <h4>About us</h4> <ul> <li><a href="#">メッセージ</a></li> <li><a href="#">会社情報</a></li> <li><a href="#">沿革</a></li> </ul> </div> <div class="footer-links  "> <h4>What we do</h4> <ul> <li><a href="#">ITソリューション </a></li> <li><a href="#">BPOソリューション </a></li> <li><a href="#">HRソリューション </a></li> </ul> </div> <div class="footer-links  "> <h4>Update</h4> <ul> <li><a href="#">ブログ </a></li> <li><a href="#">ニュース </a></li> <li><a href="#">採用情報 </a></li> <li><a href="#">社員インタビュー </a></li> </ul> </div> <div class="footer-links  "> <h4>Contact</h4> <ul> <li><a href="#">お問い合わせ </a></li> <li> <a href="#">よくある質問 </a></li> </ul> </div> </div> </div> </div> </div> <div class="container"> <div class="copyright d-flex"> <p> ©Pasona Tech Vietnam Co., LTD.</p> <a href="#">サイトポリシー&プライバシーポリシー</a> </div> </div> </footer> <!-- End Footer -->';
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

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
      ele && (ele != this.nextElementSibling)&& ele.classList.toggle('dropdown-active');
      this.nextElementSibling.classList.toggle('dropdown-active');
      eleIcon[0].className =  eleIcon[0].classList.contains('bi-chevron-down') ?  'bi bi-chevron-up' : 'bi bi-chevron-down';
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
})();