import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyris-moe';
  year = (new Date()).getFullYear();
}

window.onload = function () {
    let preload = <HTMLElement>document.getElementsByClassName('preload')[0];
    let chapters = <HTMLElement>document.getElementsByClassName('chapters')[0];
    let main_page = <HTMLElement>document.getElementsByClassName('main')[0];
    let about_page = <HTMLElement>document.getElementsByClassName('about')[0];
    let skip = <HTMLElement>document.getElementById('pre-skip');
    let click = <HTMLElement>document.getElementById('page-click');
    let close = <HTMLElement>document.getElementById('about-close');

    setTimeout(function() { chapters.style.display = 'block'; }, 3000);

    chapters.addEventListener('animationend', function(e) {
        if (e.animationName === 'scale1-fill') {
            preload.remove();
        }
        else if (e.animationName === 'show-index-page') {
            main_page.style.display = 'block';
            chapters.remove();
        }
    });

    let chapter_1 = <HTMLElement>document.getElementsByClassName('chapter-1')[0];
    let chapter_extra = <HTMLElement>document.getElementsByClassName('chapter-1__extra')[0];

    chapter_extra.addEventListener('animationend', function (e) {
        if (e.animationName === 'left-slide-in') {
            chapter_1.remove();
        }
    });

    function clickAction(el, Func) { el.onclick = Func ;}
    function showMain() {
        main_page.style.display = 'block';
        preload.remove();
        chapters.remove();
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

console.log('> 「 绿生 」');
console.log('>  Cyris\'s design portfolio v1.');