document.addEventListener('DOMContentLoaded', () => {
  // Hides alert system
  $('#alertSystem').hide();

  // Target div to show points obtained in the game
  const resultDisplay = document.querySelector('#result');

  // Create array of cards data
  const cardArray = [
    {
      name: '1',
      img: 'images/1.jpg',
    },
    {
      name: '2',
      img: 'images/1.jpg',
    },
    {
      name: '3',
      img: 'images/1.jpg',
    },
    {
      name: '4',
      img: 'images/1.jpg',
    },
    {
      name: '5',
      img: 'images/1.jpg',
    },
    {
      name: '6',
      img: 'images/1.jpg',
    },
    {
      name: '7',
      img: 'images/1.jpg',
    },
    {
      name: 'green',
      img: 'images/14.jpg',
    },
    // {
    //   name: 'yes',
    //   img: 'images/9.jpg',
    // },
    // {
    //   name: 'yes',
    //   img: 'images/10.jpg',
    // },
    // {
    //   name: 'naj',
    //   img: 'images/11.jpg',
    // },
    // {
    //   name: 'yes',
    //   img: 'images/12.jpg',
    // },
    // {
    //   name: 'naj',
    //   img: 'images/13.jpg',
    // },
    // {
    //   name: 'naj',
    //   img: 'images/14.jpg',
    // },
    // {
    //   name: 'yes',
    //   img: 'images/15.jpg',
    // },
    // {
    //   name: 'yes',
    //   img: 'images/16.jpg',
    // },
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
