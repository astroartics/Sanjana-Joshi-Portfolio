const startVideo = document.querySelector("#startVideo");
const stopVideo = document.querySelector("#stopVideo");
const helloWorld = document.querySelector("#helloWorld");
const home = document.querySelector("#home");
const tv = document.querySelector("#tv");
const repair = document.querySelector("#repair");
const crack1 = document.querySelector("#crack");
const crack2 = document.querySelector("#crack2");


function reachMe(platform) {
    if (platform == 'gmail') {
        if (!isMobileDevice) {
            navigator.clipboard.writeText("sanjanajoshi2023@gmail.com");
            let toast = document.querySelector('#toast');
            toast.style.display = "block";
            setTimeout(function () {
                toast.style.display = "none";
            }, 2000);
        } else {
            let goToGmail = document.querySelector('#goToGmail');
            goToGmail.setAttribute('href', 'mailto:sanjanajoshi2023@gmail.com');
        }

    } else if (platform == 'linkedIn') {
        window.open("http://www.linkedin.com/in/sanjana-joshi-533853278", '_blank');
    }
}




window.addEventListener('load', function () {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    isMobileDevice = regexp.test(details);

    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');

    if (!isMobileDevice) {
        link.setAttribute('href', 'laptopCSS.css');
    } else {
        link.setAttribute('href', 'mobileCSS.css');
    }

    document.querySelector('head').appendChild(link);

    gmail.addEventListener('click', function () {
        reachMe('gmail');
    });

    linkedIn.addEventListener('click', function () {
        reachMe('linkedIn');
    })


    stopVideo.addEventListener('click', function () {
        helloWorld.pause();
        helloWorld.currentTime = 11;
    });

    startVideo.addEventListener('click', function () {
        helloWorld.play();
        helloWorld.currentTime = 0;
    });

    home.addEventListener('click', function () {
        window.location.href = "../index.html";
    });
});