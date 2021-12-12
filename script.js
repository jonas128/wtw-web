document.addEventListener('DOMContentLoaded', () => {
  // Hides alert system
  $('#alertSystem').hide();

  // Target div to show points obtained in the game
  const resultDisplay = document.querySelector('#result');

  // Create array of cards data
  const cardArray = [
    {
      name: 'jona',
      img: 'images/1.jpg',
    },
    {
      name: 'naj',
      img: 'images/2.jpg',
    },
    {
      name: 'yes',
      img: 'images/3.jpg',
    },
    {
      name: 'yes',
      img: 'images/4.jpg',
    },
    {
      name: 'naj',
      img: 'images/5.jpg',
    },
    {
      name: 'naj',
      img: 'images/6.jpg',
    },
    {
      name: 'naj',
      img: 'images/7.jpg',
    },
    {
      name: 'boker tov jones/jonas',
      img: 'images/8.jpg',
    },
    {
      name: 'yes',
      img: 'images/9.jpg',
    },
    {
      name: 'yes',
      img: 'images/10.jpg',
    },
    {
      name: 'naj',
      img: 'images/11.jpg',
    },
    {
      name: 'yes',
      img: 'images/12.jpg',
    },
    {
      name: 'naj',
      img: 'images/13.jpg',
    },
    {
      name: 'naj',
      img: 'images/14.jpg',
    },
    {
      name: 'yes',
      img: 'images/15.jpg',
    },
    {
      name: 'yes',
      img: 'images/16.jpg',
    },
  ];

  // For randomizing card location
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid-container');

  // Creates card board
  function createBoard() {
    let id = 0;
    cardArray.forEach((card) => {
      let cardImage = document.createElement('img');
      cardImage.setAttribute('src', 'images/blank.png');
      cardImage.setAttribute('data-id', id);
      cardImage.addEventListener('click', flipcard);
      grid.appendChild(cardImage);

      id++;
    });
  }

  // Flips a card
  function flipcard() {
    const cardId = this.getAttribute('data-id');

    resultDisplay.textContent = cardArray[cardId].name;
    this.setAttribute('src', cardArray[cardId].img);
  }

  createBoard();
});