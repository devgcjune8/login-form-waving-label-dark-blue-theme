const inputLabels =  document.querySelectorAll('.form-container label');

inputLabels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((char, i) => `<span style="transition-delay:${43 * i}ms">${char}</span>`)
    .join('')
}
)

window.addEventListener("load", () => document.querySelector('.login-container h1').classList.add('login-title-change-color'));

