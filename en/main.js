const recommendBtn = document.getElementById('recommend-btn');
const menuContainer = document.querySelector('.menu-container');
const themeToggle = document.getElementById('theme-toggle');

if (!recommendBtn || !menuContainer || !themeToggle) {
    throw new Error('Required DOM elements not found');
}

const menus = [
    { name: 'Pizza', emoji: '🍕' },
    { name: 'Burger', emoji: '🍔' },
    { name: 'Sushi', emoji: '🍣' },
    { name: 'Tacos', emoji: '🌮' },
    { name: 'Pasta', emoji: '🍝' },
    { name: 'Steak', emoji: '🥩' },
    { name: 'Fried Chicken', emoji: '🍗' },
    { name: 'Ramen', emoji: '🍜' },
    { name: 'Curry', emoji: '🍛' },
    { name: 'Salad', emoji: '🥗' },
    { name: 'BBQ Ribs', emoji: '🍖' },
    { name: 'Fish & Chips', emoji: '🐟' },
    { name: 'Pad Thai', emoji: '🥢' },
    { name: 'Burrito', emoji: '🌯' },
    { name: 'Pho', emoji: '🍲' },
    { name: 'Dim Sum', emoji: '🥟' },
    { name: 'Greek Gyros', emoji: '🥙' },
    { name: 'Lasagna', emoji: '🧀' },
    { name: 'Salmon', emoji: '🐠' },
    { name: 'Hot Dog', emoji: '🌭' },
    { name: 'Bibimbap', emoji: '🍚' },
    { name: 'Falafel', emoji: '🧆' },
    { name: 'Paella', emoji: '🥘' },
    { name: 'Poke Bowl', emoji: '🥣' },
    { name: 'Shawarma', emoji: '🥙' },
    { name: 'Tom Yum Soup', emoji: '🍜' },
    { name: 'Peking Duck', emoji: '🦆' },
    { name: 'Mac & Cheese', emoji: '🧀' },
    { name: 'Lobster', emoji: '🦞' },
    { name: 'Croissant', emoji: '🥐' }
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
