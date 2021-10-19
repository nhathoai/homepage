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
  select("#header").outerHTML = '<!-- ======= Header ======= --> <header id="header" class="header fixed-top"> <div class="container-flud d-flex justify-content-between align-items-center "> <!--  --> <a href="./" class="logo d-flex align-items-center" style="flex: 1"> <img src="assets/img/PTVLogo.png" alt=""> </a> <nav id="navbar" class="navbar"> <ul> <li class="dropdown"> <a class="nav-link scrollto"> 会社概要 <i class="bi bi-chevron-down"></i> </a> <ul> <li><a href="./message">メッセージ</a></li> <li><a href="./company" target="_self">会社情報</a></li> <li><a href="./history" target="_self">沿革</a></li> </ul> </li> <li class="dropdown"> <a class="nav-link scrollto" href="#service">サービス <i class="bi bi-chevron-down"></i></a> <ul> <li><a href="#">ITソリューション</a></li> <li><a href="#">BPOソリューション</a></li> <li><a href="#">HRソリューション</a></li> </ul> </li> <li><a class="nav-link scrollto" href="#blog">ブログ</a></li> <li><a class="nav-link scrollto" href="#news">ニュース</a></li> <li><a class="nav-link scrollto" href="#career">採用情報</a></li> <li><a class="nav-link scrollto" href="./fqa">よくある質問</a></li> <li><a class="nav-link nav-link-active scrollto" href="#contact">お問い合わせ</a></li> <li> <div class="logo-group"> <a href="" class="nav-link-social"> <?xml version="1.0" encoding="utf-8"?> <svg class="fb" width="28" height="29" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1579 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z" fill="#444444" /></svg> </a> <a href="" class="nav-link-social"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="lk" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg> </a> </div> </li> <li class="dropdown"> <a class="nav-link scrollto" href="#about">Language <i class="bi bi-chevron-down"></i></a> <ul class="lang"> <li><img src="./assets/img/language/jp.svg"><a href="./index"> 日本語</a></li> <li><img src="./assets/img/language/gb-eng.svg"><a href="./index-en"> English</a></li> <li><img src="./assets/img/language/vn.svg"> <a href="./index-vn">Tiếng Việt</a></li> <li><img src="./assets/img/language/kr.svg"><a href="./index-kr"> 한국</a></li> </ul> </li> </ul> <i class="bi bi-list mobile-nav-toggle"></i> </nav><!-- .navbar --> </div> </header><!-- End Header -->';
  
  select("#footer").outerHTML = '<!-- ======= Footer ======= --> <footer id="footer" class="footer"> <div class="footer-top"> <div class="container"> <div class="row gy-4"> <div class="col-lg-6 col-md-12 col-sm-12 footer-info"> <p class="name">PASONA TECH VIETNAM CO., LTD.</p> <p class="mail">Email: inquiry@pasonatech.vn</p> <p><a href="" onclick="return main.openHistory(0)">ホーチミン本社 拠点情報</a> </p> <p><a href="" onclick="return main.openHistory(0)">ホーチミンサテライトオフィス 拠点情報</a></p> <p><a href="" onclick="return main.openHistory(1)">ハノイはオフィス 拠点情報</a></p> <p><a href="" onclick="return main.openHistory(1)">ダナンオフィス 拠点情報</a></p> </div> <div class=" footer-links-par col-lg-6 col-md-12  col-sm-12 d-flex justify-content-between"> <div class="footer-links  "> <h4>About us</h4> <ul> <li><a href="#">メッセージ</a></li> <li><a href="#">会社情報</a></li> <li><a href="#">沿革</a></li> </ul> </div> <div class="footer-links  "> <h4>What we do</h4> <ul> <li><a href="#">ITソリューション </a></li> <li><a href="#">BPOソリューション </a></li> <li><a href="#">HRソリューション </a></li> </ul> </div> <div class="footer-links  "> <h4>Update</h4> <ul> <li><a href="#">ブログ </a></li> <li><a href="#">ニュース </a></li> <li><a href="#">採用情報 </a></li> <li><a href="#">社員インタビュー </a></li> </ul> </div> <div class="footer-links  "> <h4>Contact</h4> <ul> <li><a href="#">お問い合わせ </a></li> <li><a href="#">よくある質問 </a></li> </ul> </div> </div> </div> </div> </div> <div class="container"> <div class="copyright d-flex"> <p> ©Pasona Tech Vietnam Co., LTD.</p> <a href="./privacy">サイトポリシー&プライバシーポリシー</a> </div> </div> </footer> <!-- End Footer -->';
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

  on('click', '.faq-category .faq-header button', function(e){
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

  const openHistory = function (index){
    let pageHistory = window.location.href.indexOf("company");
  
    if(pageHistory >= 0){
      let hash = window.location.hash.substr(1);
      let header = select('#header');
      let offset = header.offsetHeight;
      let selectors = select('.office .container .row', true);
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 10
      }
      if(index >= 0 || hash.length > 0){
        let top = selectors[index >= 0 ? index: hash].offsetTop;

        window.scrollTo({
          top: top - offset,
          behavior: 'smooth'
        })
      }
      
    }else{
      if(index >= 0){
        window.location.href = "./company#" + index;
      }
    }
    return false;
  }

  openHistory();

  return {
    openHistory: openHistory
  }
})();

