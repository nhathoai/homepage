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

    on('submit', '.contact form', function (e) {
        validated([this.elements["radio-group"],
            this.elements["name"],
            this.elements["email"],
            this.elements["tel"],
            this.elements["comment"],
            this.elements["accept-terms"]
        ]);

        e.preventDefault();
        e.stopPropagation();
    })

    on('focusout', '.contact input', function (e) {
        validated([this]);
    }, true);

    on('focusout', '.contact textarea', function (e) {
        validated([this]);
    }, true);

    on('click', '.contact input[type=checkbox]', function (e) {
        validated([this]);
    }, true);

    on('click', '[name=radio-group]', function (e) {

        const selectEle = select('.content-service');
        selectEle.innerHTML = "";
        if (this.value == 'it') {
            selectEle.insertAdjacentHTML('beforeend', '<option value="オフショア開発について">オフショア開発について</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="拠点進出について">拠点進出について</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="お見積もりの相談">お見積もりの相談</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="その他">その他</option>');
        } else if (this.value == 'bpo') {
            selectEle.insertAdjacentHTML('beforeend', '<option value="CADアウトソーシングについて">CADアウトソーシングについて</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="拠点進出について">拠点進出について</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="お見積もりの相談">お見積もりの相談</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="その他">その他</option>');
        } else if (this.value == 'hr') {
            selectEle.insertAdjacentHTML('beforeend', '<option value="採用支援について">採用支援について</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="人材派遣について">人材派遣について</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="人事コンサルティングについて">人事コンサルティングについて</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="教育・ビジネス研修について">教育・ビジネス研修について</option>');
            selectEle.insertAdjacentHTML('beforeend', '<option value="その他">その他</option>');
        }
    }, true)

    function validated(eles) {
        let err = false;
        let errEle;
        let txt = "";

        eles.forEach(function name(ele) {
            const name = ele && ele.name;
            const val = ele.value;
            errEle = ele.parentNode && (ele.parentNode.querySelector('.error') || ele.parentNode.parentNode.querySelector('.error'));

            if (name == "name") {
                txt = (val.length <= 1) ? "貴社名は1文字以上で入力してください。" : "";
                txt = (val.length == 0) ? "お名前を入力してください" : txt;
            }

            if (name == "email") {
                txt = (/\S+@\S+\.\S+/.test(val)) ? "有効なメールアドレスを入力してください" : "";
                txt = (val.length == 0) ? "メールアドレスを入力してください" : txt;
            }

            if (name == "tel") {
                const match = val.match(/\d/g);
                txt = (!match || (match && match.length < 8)) ? "有効な電話番号を入力してください" : "";
            }

            if (name == "comment") {
                txt = (val.length <= 1) ? "貴社名は1文字以上で入力してください。" : "";
                txt = (val.length == 0) ? "お問い合わせ内容を記入してください" : txt;
            }

            if (name == "accept-terms") {
                txt = (!ele.checked) ? "当社個人情報保護方針に同意してください" : "";
            }

            if (ele[0] && ele[0].name == 'radio-group') {
                const arrChecked = Array.from(ele).filter(function name(ele) {
                    return ele.checked;
                })

                errEle = ele[0].parentNode.parentNode.querySelector('.error');
                txt = (arrChecked == 0) ? "お問い合わせ内容を選択してください" : "";
            }

            errEle.innerText = txt;
            if (txt) {
                err = true;
            }
        })

        return err;
    }

})