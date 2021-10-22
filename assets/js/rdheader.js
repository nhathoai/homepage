var init = new init();
init.select("#header").outerHTML = `<!-- ======= Header ======= -->
<header id="header" class="header fixed-top">
    <div class="container-flud d-flex justify-content-between align-items-center ">
        <!--  --> <a href="./" class="logo d-flex align-items-center" style="flex: 1"> <img src="assets/img/PTVLogo.png"
                alt=""> </a>
        <nav id="navbar" class="navbar">
            <ul>
                <li class="dropdown"> <a class="nav-link scrollto"> 会社概要 <i class="bi bi-chevron-down"></i> </a>
                    <ul>
                        <li><a href="./message">メッセージ</a></li>
                        <li><a href="./company" target="_self">会社情報</a></li>
                        <li><a href="./history" target="_self">沿革</a></li>
                    </ul>
                </li>
                <li class="dropdown"> <a class="nav-link scrollto" href="#service">サービス <i
                            class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">ITソリューション</a></li>
                        <li><a href="#">BPOソリューション</a></li>
                        <li><a href="#">HRソリューション</a></li>
                    </ul>
                </li>
                <li><a class="nav-link scrollto" href="#blog">ブログ</a></li>
                <li><a class="nav-link scrollto" href="#news">ニュース</a></li>
                <li><a class="nav-link scrollto" href="#career">採用情報</a></li>
                <li><a class="nav-link scrollto" href="./fqa">よくある質問</a></li>
                <li><a class="nav-link nav-link-active scrollto" href="./contact">お問い合わせ</a></li>
                <li>
                    <div class="logo-group"> <a href="" class="nav-link-social">
                            <?xml version="1.0" encoding="utf-8"?> <svg class="fb" width="28" height="29"
                                viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1579 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z"
                                    fill="#444444" /></svg> </a> <a href="" class="nav-link-social"> <svg
                                xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="lk"
                                class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg> </a> </div>
                </li>
                <li class="dropdown"> <a class="nav-link scrollto" href="#about">Language 
                    <img src="./assets/img/Arrow.svg" alt="" style="
                    transform: scale(.7);
                ">
                    </a>
                    <ul class="lang">
                        <li><img src="./assets/img/language/jp.svg"><a href="./index"> 日本語</a></li>
                        <li><img src="./assets/img/language/gb-eng.svg"><a href="./index-en"> English</a></li>
                        <li><img src="./assets/img/language/vn.svg"> <a href="./index-vn">Tiếng Việt</a></li>
                        <li><img src="./assets/img/language/kr.svg"><a href="./index-kr"> 한국</a></li>
                    </ul>
                </li>
            </ul> <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
    </div>
</header><!-- End Header -->
`;