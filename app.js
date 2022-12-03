document.addEventListener('DOMContentLoaded', ()  => {

    const cardArray = [
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'banana',
            img: 'images/banana.png'
        },
        {
            name: 'pineapple',
            img: 'images/pineapple.png'
        },
        {
            name: 'cherry',
            img: 'images/cherry.png'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'banana',
            img: 'images/banana.png'
        },
        {
            name: 'pineapple',
            img: 'images/pineapple.png'
        },
        {
            name: 'cherry',
            img: 'images/cherry.png'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = [] 
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard) 
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            alert('lo encontraste!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].removeEventListener("click", flipCard); 
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('nop, intentalo denuevo')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Se logró chicoss'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})