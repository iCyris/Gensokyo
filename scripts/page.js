window.onload = function () {
    let preload = document.getElementsByClassName("preload")[0];
    let chapters = document.getElementsByClassName('chapters')[0];
    let main_page = document.getElementsByClassName('main')[0];
    let about_page = document.getElementsByClassName("about")[0];
    let skip = document.querySelectorAll(".pre-skip");
    let click = document.querySelectorAll(".page-click");
    let close = document.querySelectorAll(".about-close");

    setTimeout(function(){chapters.style.display='block';}, 2400);
    setTimeout(function(){preload.remove();}, 4750);

    (function() {
        chapters.addEventListener('animationend', function(e) {
            if(e.animationName === 'fade_out') {
                main_page.style.display = 'block';
            }
        })
    })();
    function clickAction(el, Func) {
        for (let i=0; i<el.length; i++){
            el[i].onclick = Func;
        }
    }
    function showMain() {
        main_page.style.display = 'block';
    }
    function showAbout() {
        about_page.style.display = 'block';
    }
    function hideAbout() {
        about_page.style.display = 'none';
    }
    clickAction(skip, showMain);
    clickAction(click, showAbout);
    clickAction(close, hideAbout);
};

console.log("$ which cyris.moe");
console.log("/index");