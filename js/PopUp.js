export class PopUp {

    makePopUp(moves) {
        let PopUp = document.createElement("div");
        PopUp.classList.add('popUp');
        let popUpmessge = document.createElement('button');
        popUpmessge.classList.add('popUpmessage');
        popUpmessge.innerHTML = `You won in ${moves} moves! <br><br> Play again`;


        PopUp.appendChild(popUpmessge);


        return PopUp;
    }
}
