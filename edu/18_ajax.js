// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number
// 특이사항: 이미지는 1000개가 준비되어 있다.
// 예제: https://picsum.photos/v2/list?page=2&limit=100

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // 기존 이벤트 취소

  const baseURL = 'https://picsum.photos';
  const path = '/v2/list';

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;


  try {
    const response = await axios.get(url);

    // 카드를 넣을 컨테이너 요소
    const cardContainer = document.querySelector('.card-container');
    cardContainer.textContent = '';

    response.data.forEach((item, idx) => {
      
      // 1. card-img 요소 생성
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url(${item.download_url})`;
      
      // 2. card-text 요소 생성
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `${item.id}: ${item.author}`;
      
      // 3. card 요소 생성
      const card = document.createElement('div');
      card.classList.add('card');
      card.appendChild(cardImg);
      card.appendChild(cardText);

      // 4. card-container에 생성한 요소를 담는다.
      cardContainer.appendChild(card);
    });
    
  } catch (error) {
    console.error(error);
  }

});