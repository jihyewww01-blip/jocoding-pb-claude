const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.querySelector('.numbers-container');
const sortedNumbersContainer = document.querySelector('.sorted-numbers-container');

if (!generateBtn || !numbersContainer || !sortedNumbersContainer) {
    throw new Error('Required DOM elements not found');
}

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    sortedNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const numberArray = Array.from(numbers);

    numberArray.forEach((number, index) => {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numberEl.style.animationDelay = `${index * 100}ms`;
        numbersContainer.appendChild(numberEl);
    });

    setTimeout(() => {
        const sortedNumbers = numberArray.sort((a, b) => a - b);
        sortedNumbers.forEach((number, index) => {
            const sortedNumberEl = document.createElement('div');
            sortedNumberEl.classList.add('sorted-number');
            sortedNumberEl.textContent = number;
            sortedNumberEl.style.animationDelay = `${index * 100}ms`;
            sortedNumbersContainer.appendChild(sortedNumberEl);
        });
    }, 700);
});
