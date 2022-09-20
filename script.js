const allLang = ["ua", "en"];
let select = document.querySelector("select");

select.addEventListener("change", changeURLLang);

function changeURLLang() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
    console.log(lang);
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.slice(1);
    console.log(hash);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload();
    }
    select.value = hash;

    document.querySelector('title').innerHTML = langTitle['unit'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-'+key);
        if(elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLang ();