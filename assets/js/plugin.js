(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
    //   factory(mod.exports);
      global.init = factory;
    }
  })(this, function (exports) {
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


    // select("#footer").outerHTML = '<!-- ======= Footer ======= --> <footer id="footer" class="footer"> <div class="footer-top"> <div class="container"> <div class="row gy-4"> <div class="col-lg-6 col-md-12 col-sm-12 footer-info"> <p class="name">PASONA TECH VIETNAM CO., LTD.</p> <p class="mail">Email: inquiry@pasonatech.vn</p> <p><a href="" onclick="return main.openHistory(0)">ホーチミン本社 拠点情報</a> </p> <p><a href="" onclick="return main.openHistory(0)">ホーチミンサテライトオフィス 拠点情報</a></p> <p><a href="" onclick="return main.openHistory(1)">ハノイはオフィス 拠点情報</a></p> <p><a href="" onclick="return main.openHistory(1)">ダナンオフィス 拠点情報</a></p> </div> <div class=" footer-links-par col-lg-6 col-md-12  col-sm-12 d-flex justify-content-between"> <div class="footer-links  "> <h4>About us</h4> <ul> <li><a href="#">メッセージ</a></li> <li><a href="#">会社情報</a></li> <li><a href="#">沿革</a></li> </ul> </div> <div class="footer-links  "> <h4>What we do</h4> <ul> <li><a href="#">ITソリューション </a></li> <li><a href="#">BPOソリューション </a></li> <li><a href="#">HRソリューション </a></li> </ul> </div> <div class="footer-links  "> <h4>Update</h4> <ul> <li><a href="#">ブログ </a></li> <li><a href="#">ニュース </a></li> <li><a href="#">採用情報 </a></li> <li><a href="#">社員インタビュー </a></li> </ul> </div> <div class="footer-links  "> <h4>Contact</h4> <ul> <li><a href="#">お問い合わせ </a></li> <li><a href="#">よくある質問 </a></li> </ul> </div> </div> </div> </div> </div> <div class="container"> <div class="copyright d-flex"> <p> ©Pasona Tech Vietnam Co., LTD.</p> <a href="./policy">サイトポリシー&プライバシーポリシー</a> </div> </div> </footer> <!-- End Footer -->';
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
    return {
        select : select,
        on: on
    }
  });

