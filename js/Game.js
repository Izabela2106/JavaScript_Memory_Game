import {
    Card
} from "/js/Card.js";
import {
    PopUp
} from "/js/PopUp.js"

class Game {
    constructor() {
        this.levels = {
            Easy: {
                rows: 4,
                columns: 4
            },
            Medium: {
                rows: 4,
                columns: 7
            },
            Hard: {
                rows: 5,
                columns: 8
            }
        };

        this.cards = [];
        this.gameArea = document.querySelector(".gameArea");
        this.buttons = document.querySelectorAll('.button');
        this.buttonsArea = document.querySelector(".buttons");
        this.buttons.forEach(el => {
            el.addEventListener("click", () => {
                this.init(el.innerHTML);
            })
        })

    }


    init(level) {
        this.buttonsArea.classList.add("hide");
        this.rows = this.levels[level].rows;
        this.columns = this.levels[level].columns;
        this.cards = [];

        this.makeDeck();
        this.game();


    }


    makeDeck() {
        this.gameArea.innerHTML = "";

        for (let i = 1; i <= this.rows * this.columns / 2; i++) {
            this.cards.push(i);
            this.cards.push(i);
        }
        this.shuffleCards = this.cards.sort((a, b) =>
            0.5 - Math.random());

        this.shuffleCards.forEach((card) => {
            this.gameArea.appendChild(new Card(100, 100).makeCard(card))
        })
        this.gameArea.style.gridTemplateColumns = `repeat(${this.columns},100px)`;
        this.gameArea.style.gridTemplateRows = `repeat(${this.rows},100px)`;


    }



    game() {
        let prevCard = null;
        let gameCounter = 0;
        let cardCounter = this.rows * this.columns;


        let movesCounter = 0;
        let flippedCounter = 0;

        this.gameArea.addEventListener('click', function cardFlip(el) {
            el.preventDefault();
            el.stopPropagation();


            if (el.target.parentElement.classList.contains('activeCard') && flippedCounter < 2) {
                if (gameCounter <= 0) {
                    prevCard = el.target;
                    el.target.parentElement.classList.add('is_flipped');
                    flippedCounter++;
                    el.target.parentElement.classList.remove('activeCard');
                    gameCounter++;

                    return;
                } else if (gameCounter === 1) {

                    el.target.parentElement.classList.toggle('activeCard');

                    movesCounter++;
                    el.target.parentElement.classList.toggle('is_flipped');
                    flippedCounter++;

                    setTimeout(() => {
                        if (prevCard.parentElement.getAttribute("number") === el.target.parentElement.getAttribute("number")) {
                            //el.target.parentElement.classList.remove('is_flipped');
                            el.target.parentElement.classList.remove('activeCard');
                            flippedCounter--;

                            //prevCard.parentElement.classList.remove('is_flipped');
                            prevCard.parentElement.classList.remove('activeCard');
                            flippedCounter--;

                            prevCard.previousSibling.firstChild.style.opacity = "0.3";
                            el.target.previousSibling.firstChild.style.opacity = "0.3"
                            cardCounter = cardCounter - 2;


                            if (cardCounter === 0) {
                                endGame();
                            }

                        } else {
                            el.target.parentElement.classList.remove('is_flipped');
                            flippedCounter--;
                            el.target.parentElement.classList.toggle('activeCard');

                            prevCard.parentElement.classList.remove('is_flipped');
                            flippedCounter--;
                            prevCard.parentElement.classList.toggle('activeCard');


                        }
                        prevCard = null;
                        gameCounter = 0;
                        return;
                    }, 1000);


                }

            }

            function endGame() {

                let gameArea = document.querySelector('.gameArea');
                let popUp = new PopUp().makePopUp(movesCounter);
                let popUpmessage = popUp.firstChild;
                let buttonsArea = document.querySelector(".buttons");

                popUpmessage.addEventListener('click', () => {
                    gameArea.innerHTML = "";
                    buttonsArea.classList.remove("hide");
                    gameArea.removeEventListener('click', cardFlip);
                })

                gameArea.appendChild(popUp);
            }

        })

    }



}



const game = new Game();
