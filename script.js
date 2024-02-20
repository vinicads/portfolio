let text = document.getElementById('text')
let baixoFundo = document.getElementById('baixoFundo')
let navbar = document.getElementById('navbar')
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
   

    let value = window.scrollY;
    let windowHeight = window.screen.height;
    text.style.marginTop = value * 2.5 + 'px';
    baixoFundo.style.marginTop = value * -1,5 + 'px'

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll < lastScrollTop) {
        navbar.classList.add('animate-out');
        navbar.addEventListener('animationend', handleAnimationEnd);
        return;
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    if (value > 300){
        navbar.classList.remove('animate-out');
        navbar.classList.add('fixed');
        navbar.classList.add('animate-in');
        navbar.addEventListener('animationend', handleAnimationEnd);
    } else {
        navbar.classList.remove('animate-in');
        navbar.classList.add('animate-out');
    }
});

function handleAnimationEnd(event) {
    if (event.animationName === 'reverseFixedNavbar') {
        navbar.classList.remove('fixed');
        navbar.removeEventListener('animationend', handleAnimationEnd);
    }  
}

function openMenu() {
    var navigation = document.getElementById('navigation')
    var menu = document.getElementById('menu')
    navigation.classList.toggle('menuOpen')
    menu.classList.toggle('changeMenu')
    showLinks()
}

function showLinks() {
    var links = document.querySelectorAll('.navigation li')
    links.forEach((link, index) => {
        link.style.animation
        ? link.style.animation = ''
        : link.style.animation = `changeLinks ${index/1*0.8}s forwards`
    });
}

window.addEventListener('load', () => {
    typeWriter(0)
})

function typeWriter(index) {
    var animatedText = document.getElementById("animated-text");
    const words = ["Vinicius Augusto dos Santos", "Desenvolvedor fullstack"];
    animatedText.textContent = "";
    var word = words[index].split('');

    const fillTextPromise = new Promise((resolve) => {
        word.forEach((letter, i) => {
            setTimeout(() => {
                animatedText.textContent += letter;
                if (i === word.length - 1) resolve();
            }, 100 * i);
        });
    });

    fillTextPromise.then(() => {
        setTimeout(() => {
            const eraseTextPromise = new Promise((resolve) => {
                word.forEach((letter, i) => {
                    setTimeout(() => {
                        animatedText.textContent = animatedText.textContent.substring(0, animatedText.textContent.length - 1);
                        if (i === word.length - 1) resolve();
                    }, 100 * i);
                });
            });

            eraseTextPromise.then(() => {
                setTimeout(() => {
                    index = (index + 1) % words.length; 
                    typeWriter(index);
                }, 1000);
            });
        }, 1000);
    });
}