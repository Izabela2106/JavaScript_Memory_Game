export class Card {
    constructor(width, height, num) {
        this.width = width;
        this.height = height;

    }


    makeCard(num) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("activeCard");
        card.setAttribute("number", num);
        card.style.width = this.width + "px";
        card.style.height = this.height + "px";
        let front = document.createElement("div");
        front.classList.add('cardFront');
        let back = document.createElement("div");
        back.classList.add("cardBack");
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        imgContainer.style.backgroundImage = `url(/img/${num}.jpg)`;
        back.style.backgroundImage = `transparent`;
        back.appendChild(imgContainer);
        card.appendChild(back);
        card.appendChild(front);
        return card;
    }

}
