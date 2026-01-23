const recommendBtn = document.getElementById('recommend-btn');
const menuContainer = document.querySelector('.menu-container');
const themeToggle = document.getElementById('theme-toggle');

if (!recommendBtn || !menuContainer || !themeToggle) {
    throw new Error('Required DOM elements not found');
}

const menus = [
    { name: '김치찌개', emoji: '🍲' },
    { name: '삼겹살', emoji: '🥓' },
    { name: '치킨', emoji: '🍗' },
    { name: '피자', emoji: '🍕' },
    { name: '짜장면', emoji: '🍜' },
    { name: '짬뽕', emoji: '🌶️' },
    { name: '떡볶이', emoji: '🍢' },
    { name: '비빔밥', emoji: '🍚' },
    { name: '불고기', emoji: '🥩' },
    { name: '갈비찜', emoji: '🍖' },
    { name: '순두부찌개', emoji: '🥘' },
    { name: '된장찌개', emoji: '🫕' },
    { name: '칼국수', emoji: '🍝' },
    { name: '냉면', emoji: '🥶' },
    { name: '쌀국수', emoji: '🍜' },
    { name: '초밥', emoji: '🍣' },
    { name: '돈까스', emoji: '🥢' },
    { name: '햄버거', emoji: '🍔' },
    { name: '파스타', emoji: '🍝' },
    { name: '샐러드', emoji: '🥗' },
    { name: '부대찌개', emoji: '🍲' },
    { name: '감자탕', emoji: '🦴' },
    { name: '보쌈', emoji: '🥬' },
    { name: '족발', emoji: '🐷' },
    { name: '닭갈비', emoji: '🐔' },
    { name: '곱창', emoji: '🔥' },
    { name: '삼계탕', emoji: '🐓' },
    { name: '김밥', emoji: '🍙' },
    { name: '라면', emoji: '🍜' },
    { name: '카레', emoji: '🍛' }
];

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

    if (typeof reloadDisqus === 'function') {
        reloadDisqus();
    }
});

recommendBtn.addEventListener('click', () => {
    menuContainer.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];

    const emojiEl = document.createElement('div');
    emojiEl.classList.add('menu-emoji');
    emojiEl.textContent = selectedMenu.emoji;

    const menuEl = document.createElement('div');
    menuEl.classList.add('menu-item');
    menuEl.textContent = selectedMenu.name;

    menuContainer.appendChild(emojiEl);
    menuContainer.appendChild(menuEl);
});
