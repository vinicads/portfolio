let text = document.getElementById('text')
let baixoFundo = document.getElementById('baixoFundo')
let navbar = document.getElementById('navbar')
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    
    //parallax
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    baixoFundo.style.marginTop = value * -1,5 + 'px'

    //navbar
    let windowWidth = window.screen.width;

    if (windowWidth > 768){
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
    }
});

window.addEventListener('load', () => {
    countTo();
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

function countTo(){
    var countNumbers = document.querySelectorAll('.number');

    countNumbers.forEach(element => {
        let start = 0;
        let end = parseInt(element.getAttribute('data-value'));
        var timeWait = 500;
        let duration = Math.floor(timeWait / end);
        let counter = () => {
            start += 1;
            element.textContent = start;
            duration = (timeWait / (end - start));
            clearInterval(interval);
            if (start == end){
                return;
            }else{
                interval = setInterval(counter, duration)
            }

        };

        var interval = setInterval(counter, duration);
    });
}

function alternateContent(index){
    let skills = document.getElementById('skills');
    let education = document.getElementById('education');
    let skillsMenu = document.getElementById('skillsMenu');
    let educationMenu = document.getElementById('educationMenu');
    if (index == 1){
        skillsMenu.classList.add('active');
        educationMenu.classList.remove('active');
        if (skills.classList.contains('in')){
            return;
        }else{
            education.classList.remove('in');
            education.classList.add('out');
            var change = () => {
                education.style.display = 'none';
                skills.style.display = 'grid';
                skills.classList.remove('out');
                skills.classList.add('in');
                education.removeEventListener('animationend', change)
            }
            education.addEventListener('animationend', change);
            
        }
    }else{
        educationMenu.classList.add('active');
        skillsMenu.classList.remove('active');
        if (education.classList.contains('in')){
            return;
        }else{
            skills.classList.remove('in');
            skills.classList.add('out');
            var change = () => {
                skills.style.display = 'none';
                education.style.display = 'grid';
                education.classList.remove('out');
                education.classList.add('in');
                skills.removeEventListener('animationend', change)
            }
            skills.addEventListener('animationend', change);
        }
    }
}
