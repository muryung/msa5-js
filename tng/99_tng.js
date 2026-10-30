const form = document.querySelector('form');

const nextBtn = document.querySelector('.next-btn');
const resetBtn = document.querySelector('.reset-btn');

const container = document.querySelector('container');
const cardList = document.querySelector('.card-list');

const baseUrl = 'https://picsum.photos/v2/list';
let pageIdx = 0;
let isLoaded = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

nextBtn.addEventListener('click', async (e) => {
  const url = `${baseUrl}?page=${pageIdx}&limit=3`;
  if (isLoaded) return;

  isLoaded = true;
  try {
    const response = await axios.get(url);
    response.data.forEach(item => {
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url(${item.download_url})`;

      const cardContent = document.createElement('p');
      cardContent.classList.add('card-content');
      cardContent.textContent = `${item.id}: ${item.author}`;

      const card = document.createElement('div');
      card.classList.add('card');
      card.appendChild(cardImg);
      card.appendChild(cardContent);

      cardList.appendChild(card);
    });

    ++pageIdx;
  } catch (error) {
    console.error(error);
  } finally {
    isLoaded = false;
  }

});

resetBtn.addEventListener('click', (e) => {
  pageIdx = 0;
  isLoaded = false;
  cardList.innerHTML = '';
});