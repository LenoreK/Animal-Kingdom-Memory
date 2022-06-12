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

levelArray = [
cardArrayLevelOne = [
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
]

function findLevel(index) {
    let levelCards = levelArray[(index - 1)]
    let level = levelButtonArray[(index - 1)]
}

findLevel(1)
// const grid = document.querySelector('.grid')
// const points = document.querySelector('.points')
// levelChosen = []
// arrayChosenId = []

// function redirect() {
//     for (let i = 0; i < levelArray.length; i++) {
//       level.setAttribute('src', 'level-format.html')
//       level.setAttribute('data-id', i)
//       level.addEventListener('click', chooseLevel)
//       console.log(level)
//     }
//   }

// redirect()

//   function chooseLevel() {
//     const arrayId = this.getAttribute('data-id')
//     levelChosen.push(levelArray[arrayId].name)
//     arrayChosenId.push(arrayId)
//     this.setAttribute('src', cardArray[cardId].img)
//     if (cardsChosen.length === 2) {
//       setTimeout( checkForMatch, 500)
//     }
//   }