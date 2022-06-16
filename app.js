//function that adds numbers to eat array - sends user to that game
//populates screen with relevant array

const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')
const level8 = document.querySelector('.level8')
const level9 = document.querySelector('.level0')
const level10 = document.querySelector('.level10')
const level11 = document.querySelector('.level11')
const level12 = document.querySelector('.level12')
const redirect = document.querySelector('.redirect')

levelButtonArray = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12]

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

function checkForMatch(card) {
    let cards = document.querySelector('.grid img')
    let cardOne = selectedCards[0]
    let cardTwo = selectedCards[1]
    let oneId = selectedCardId[0]
    let twoId = selectedCardId[1]
    
    if (cardOne.id === cardTwo.id) {
        cards.setAttribute('src', cardArrayLevelOne[oneId].img2)
        cards.setAttribute('src', cardArrayLevelOne[twoId].img2)
        console.log('You choose the same card!')
    } else if (cardOne.img === cardTwo.img) {
        console.log('You have found a match')
        cardOne.setAttribute('src', 'Assets/white.jpg')
        cardTwo.setAttribute('src', 'Assets/white.jpg')
        cards.removeEventListener('click', flipCard)
        cards.removeEventListener('click', flipCard)
        cardsWon.push(selectedCards)
    } else if (cardOne.img !== cardTwo.img) {
        cards.setAttribute('src', cardOne.img2)
        cards.setAttribute('src', cardTwo.img2)
        console.log("Sorry! Try Again!")
    }
    // points.textContent = cardsWon.length
    // console.log(cardsWon)
    // selectedCards = []
    // selectedCardId = []

    // if (cardsWon.length === levelArray[Id].length/2) {
    //     resultDisplay.innerHTML = "Congratulations! You found all the matches!"
    // }
}

createBoard(1)
})