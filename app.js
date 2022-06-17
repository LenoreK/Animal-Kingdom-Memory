//function that adds numbers to eat array - sends user to that game
//populates screen with relevant array

document.addEventListener('DOMContentLoaded', () => {

cardArrayLevelOne = [
    {
        name: 'bear',
        img: 'Assets/bear.png',
        img2: 'Assets/cartoon.webp',
        img3: 'Assets/white.jpg',
        id: 1
    },
    {
        name: 'buffalo',
        img: 'Assets/buffalo.png',
        img2: 'Assets/cartoon.webp',
        img3: 'Assets/white.jpg',
        id: 2
    },
    {
        name: 'bear',
        img: 'Assets/bear.png',
        img2: 'Assets/cartoon.webp',
        img3: 'Assets/white.jpg',
        id: 3
    },
    {
        name: 'buffalo',
        img: 'Assets/buffalo.png',
        img2: 'Assets/cartoon.webp',
        img3: 'Assets/white.jpg',
        id: 4
    }
],

cardArrayLevelTwo = [
    {
        name: 'bear',
        img: 'Assets/bear.png'
    },
    {
        name: 'buffalo',
        img: 'Assets/buffalo.png'
    },
    {
        name: 'bear',
        img: 'Assets/bear.png'
    },
    {
        name: 'buffalo',
        img: 'Assets/buffalo.png'
    },
    {
        name: 'bird',
        img: 'Assets/bird.png'
    },
    {
        name: 'bird',
        img: 'Assets/bird.png'
    }
],

cardArrayLevelThree = [
    {
        name: 'bear',
        img: 'Assets/bear.png'
    },
    {
        name: 'buffalo',
        img: 'Assets/buffalo.png'
    },
    {
        name: 'bear',
        img: 'Assets/bear.png'
    },
    {
        name: 'buffalo',
        img: 'Assets/buffalo.png'
    },
    {
        name: 'bird',
        img: 'Assets/bird.png'
    },
    {
        name: 'bird',
        img: 'Assets/bird.png'
    }   
]

const points = document.querySelector('.points')
const grid = document.querySelector('.grid')
let card = document.querySelector('.card img')

selectedCards = []
selectedCardId = []
cardsWon = []

function createBoard() {
    cardArrayLevelOne.sort(() => 0.5 - Math.random())
    for (let i = 0; i < cardArrayLevelOne.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'Assets/cartoon.webp')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function flipCard() {
    Id = this.getAttribute('data-id')
    selectedCards.push(cardArrayLevelOne[Id])
    selectedCardId.push(Id)
    this.setAttribute('src', cardArrayLevelOne[Id].img)
    if (selectedCards.length === 2) {
        setTimeout( checkForMatch, 500)
    }
}

function checkForMatch() {
    let cards = document.querySelector('.grid img')
    let cardOne = selectedCards[0]
    let cardTwo = selectedCards[1]
    let oneId = selectedCardId[0]
    let twoId = selectedCardId[1]
    let CardsWon = []

    console.log(cards)
    console.log(cardOne)
    
    if (cardOne.id === cardTwo.id) {
        cards.setAttribute('src', cardArrayLevelOne[oneId].img2)
        cards.setAttribute('src', cardArrayLevelOne[twoId].img2)
        console.log('You choose the same card!')
    } else if (cardOne.img === cardTwo.img) {
        console.log('You have found a match')
        cards.removeAttribute('src', cardArrayLevelOne[twoId].img2)
        cardsWon.removeAttribute('src', cardArrayLevelOne[oneId].img2)
        cards.removeEventListener('click', flipCard)
        cards.removeEventListener('click', flipCard)
        cardsWon.push(selectedCards)
        selectedCards.pop(twoId)
        selectedCards.pop(oneId)
        selectedCardId.pop(1)
        selectedCardId.pop(0)
    } else if (cardOne.img !== cardTwo.img) {
        cards.setAttribute('src', cardArrayLevelOne[oneId].img2)
        cards.setAttribute('src', cardArrayLevelOne[twoId].img2)
        console.log("Sorry! Try Again!")
    }
    points.textContent = cardsWon.length
    selectedCards = []
    selectedCardId = []
    
    if (cardsWon.length === levelArray[Id].length/2) {
        resultDisplay.innerHTML = "Congratulations! You found all the matches!"
    }
}

createBoard()
})