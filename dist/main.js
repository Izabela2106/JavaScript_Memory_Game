(()=>{"use strict";class e{constructor(e,t,s){this.width=e,this.height=t}makeCard(e){let t=document.createElement("div");t.classList.add("card"),t.classList.add("activeCard"),t.setAttribute("number",e),t.style.width=this.width+"px",t.style.height=this.height+"px";let s=document.createElement("div");s.classList.add("cardFront");let a=document.createElement("div");a.classList.add("cardBack");let i=document.createElement("div");return i.classList.add("imgContainer"),i.style.backgroundImage=`url(/img/${e}.jpg)`,a.style.backgroundImage="transparent",a.appendChild(i),t.appendChild(a),t.appendChild(s),t}}class t{makePopUp(e){let t=document.createElement("div");t.classList.add("popUp");let s=document.createElement("button");return s.classList.add("popUpmessage"),s.innerHTML=`You won in ${e} moves! <br><br> Play again`,t.appendChild(s),t}}new class{constructor(){this.levels={Easy:{rows:4,columns:4},Medium:{rows:4,columns:7},Hard:{rows:5,columns:8}},this.cards=[],this.gameArea=document.querySelector(".gameArea"),this.buttons=document.querySelectorAll(".button"),this.buttonsArea=document.querySelector(".buttons"),this.buttons.forEach((e=>{e.addEventListener("click",(()=>{this.init(e.innerHTML)}))}))}init(e){this.buttonsArea.classList.add("hide"),this.rows=this.levels[e].rows,this.columns=this.levels[e].columns,this.cards=[],this.makeDeck(),this.game()}makeDeck(){this.gameArea.innerHTML="";for(let e=1;e<=this.rows*this.columns/2;e++)this.cards.push(e),this.cards.push(e);this.shuffleCards=this.cards.sort(((e,t)=>.5-Math.random())),this.shuffleCards.forEach((t=>{this.gameArea.appendChild(new e(100,100).makeCard(t))})),this.gameArea.style.gridTemplateColumns=`repeat(${this.columns},100px)`,this.gameArea.style.gridTemplateRows=`repeat(${this.rows},100px)`}game(){let e=null,s=0,a=this.rows*this.columns,i=0,r=0;this.gameArea.addEventListener("click",(function n(l){if(l.preventDefault(),l.stopPropagation(),l.target.parentElement.classList.contains("activeCard")&&r<2){if(s<=0)return e=l.target,l.target.parentElement.classList.add("is_flipped"),r++,l.target.parentElement.classList.remove("activeCard"),void s++;1===s&&(l.target.parentElement.classList.toggle("activeCard"),i++,l.target.parentElement.classList.toggle("is_flipped"),r++,setTimeout((()=>{e.parentElement.getAttribute("number")===l.target.parentElement.getAttribute("number")?(l.target.parentElement.classList.remove("activeCard"),r--,e.parentElement.classList.remove("activeCard"),r--,e.previousSibling.firstChild.style.opacity="0.3",l.target.previousSibling.firstChild.style.opacity="0.3",a-=2,0===a&&function(){let e=document.querySelector(".gameArea"),s=(new t).makePopUp(i),a=s.firstChild,r=document.querySelector(".buttons");a.addEventListener("click",(()=>{e.innerHTML="",r.classList.remove("hide"),e.removeEventListener("click",n)})),e.appendChild(s)}()):(l.target.parentElement.classList.remove("is_flipped"),r--,l.target.parentElement.classList.toggle("activeCard"),e.parentElement.classList.remove("is_flipped"),r--,e.parentElement.classList.toggle("activeCard")),e=null,s=0}),1e3))}}))}}})();