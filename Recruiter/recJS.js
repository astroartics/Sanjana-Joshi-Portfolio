const container = document.querySelector('#container');
const showNavBtn = document.querySelector('#show');
const showNavDiv = document.querySelector('#showNav');
const navBarPhone = document.querySelector('#navBarForPhone');
const navBarPC = document.querySelector('#navBarForPC');
const introductionAnim = document.querySelector('#introductionAnim');

let navDisplay = 0;
let i = 0;

function introAnim() {
    let text = "Hi, I am Sanjana.";

    setInterval(function () {
        if (i == (text.length)) {
            introductionAnim.innerText = "";
            i = 0;
        }

        introductionAnim.innerText += text[i++];
    }, 230);
}

function showNavBar() {
    navBarPC.style.display = 'none';
    navBarPhone.style.display = 'none';
    showNavBtn.addEventListener('click', function () {
        showNavBtn.style.display = "none";
        navBarPhone.style.display = "block";
        navDisplay = 1;
    });

    container.addEventListener('click', function () {
        if (navDisplay) {
            showNavBtn.style.display = "block";
            showNavBtn.style.margin = "2vw auto";
            navBarPhone.style.display = "none";
            navDisplay = 1;
        }
    });

    navBarPhone.addEventListener('click', function () {
        showNavBtn.style.display = "block";
        showNavBtn.style.margin = "2vw auto";
        navBarPhone.style.display = "none";
        navDisplay = 1;
    });
}

window.addEventListener('load', function () {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    isMobileDevice = regexp.test(details);

    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');

    if (!isMobileDevice) {
        link.setAttribute('href', 'recCSS.css');
    } else {
        link.setAttribute('href', 'mobileCSS.css');
        showNavBar();
    }

    document.querySelector('head').appendChild(link);
    introAnim();
});