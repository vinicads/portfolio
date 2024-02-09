let text = document.getElementById('text')

let cimaFundo = document.getElementById('cimaFundo')
let baixoFundo = document.getElementById('baixoFundo')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    baixoFundo.style.marginTop = value * -1,5 + 'px'
})