// подключение header - footer
fetch('header.html')
    .then(response => response.text())
    .then(html => document.querySelector('.header').innerHTML = html);
fetch('footer.html')
    .then(response => response.text())
    .then(html => document.querySelector('.footer').innerHTML = html);


document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    })
})


// работа с выпадающим списком select
const dropdowns = document.querySelectorAll('.form__dropdown');
dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.form__dropdown-menu');
    dropdown.addEventListener('click', (e) => {
        dropdown.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
        e.target.focus();
        console.log();
    })
    dropdown.addEventListener('focusout', () => {
        dropdown.classList.remove('active');
        dropdownMenu.classList.remove('active');
    })
    dropdownMenu.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (e) => {
            dropdown.querySelector('span').innerText = e.target.innerText;
        })
    })
});
