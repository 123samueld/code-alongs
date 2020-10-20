document.addEventListener('DOMContentLoaded', () => {

//Card options
	const cardArray = [
		{
			name: 'burger',
			img: 'images/burger.jpg'
		},
		{
			name: 'burger',
			img: 'images/burger.jpg'
		},
		{
			name: 'croissant',
			img: 'images/croissant.jpg'
		},
		{
			name: 'croissant',
			img: 'images/croissant.jpg'
		},
		{
			name: 'fries',
			img: 'images/fries.jpg'
		},
		{
			name: 'fries',
			img: 'images/fries.jpg'
		},
		{
			name: 'icecream',
			img: 'images/icecream.jpg'
		},
		{
			name: 'icecream',
			img: 'images/icecream.jpg'
		},
		{
			name: 'pie',
			img: 'images/pie.jpg'
		},
		{
			name: 'pie',
			img: 'images/pie.jpg'
		},
		{
			name: 'pizza',
			img: 'images/pizza.jpg'
		},
		{
			name: 'pizza',
			img: 'images/pizza.jpg'
		}
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	var cardsChosen = []
	var cardsChosenId = []
	const cardsWon = []


 //Create the game board
  function createBoard() {
 	for (let i = 0; i < cardArray.length; i++) { 
	  var card = document.createElement('img')
	  card.setAttribute('src', 'images/blank.jpg')
	  card.setAttribute('data-id', i)
	  card.addEventListener('click', flipCard)
	  grid.appendChild(card)
		}
	}



	//Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]

	if(optionOneId == optionTwoId){
	  cards[optionOneId].setAttribute('src', 'images/blank.jpg')
	  cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
	  alert('You have clicked the same image.')
	}
	else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!')
      cards[optionOneId].setAttribute('src', 'images/empty.jpg')
      cards[optionTwoId].setAttribute('src', 'images/empty.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('Sorry, try again.')
    }
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if (cardsWon.length === cardsArray.length/2){
	  resultDisplay.textContnet = "Congratulations, you found them all!"
	}
  }

  	//Flips cards
  	function flipCard() {
    	var cardId = this.getAttribute('data-id')
    	cardsChosen.push(cardArray[cardId].name)
    	cardsChosenId.push(cardId)
    	this.setAttribute('src', cardArray[cardId].img)
    	if (cardsChosen.length ===2) {
      		setTimeout(checkForMatch, 500)
    	}
  	}
	createBoard()
}) 