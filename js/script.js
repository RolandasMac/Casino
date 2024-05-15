const emoji = [
    "🍇",
    "🍅",
    "🍒",
    "🌰",
    "🍌",
    "🍆",
    "🍄",
    "🥔",
    "☘️",
    "🍗",
    "🎰"


]
let dispBox = document.querySelectorAll('.box');
const btnSukti = document.querySelector('#sukti');
const btnReset = document.querySelector('#reset');

btnSukti.addEventListener('click', sukti);
btnReset.addEventListener('click', ()=>initGame(emoji));

function initGame(arr){
    for(let i = 0; i < dispBox.length; i++){
        dispBox[i].innerHTML = "";
    }
    let count = arr.length-1;
    console.log(count)
    for(let g=0; g<3; g++){

        let arr1=[...arr];
        let startItem = arr1.splice(10, 1);
        console.log(startItem)
        for(let i = count; i >=0; i--) {
            console.log(i)
            let randomInt = Math.floor(Math.random() * arr1.length );
            const div = document.createElement('div');
            const span = document.createElement('span');
            if(i===0){
                span.innerHTML += startItem[0];
            }else{
                span.innerHTML += arr1.splice(randomInt, 1)
            }
            div.appendChild(span);
            dispBox[g].appendChild(div);
        }
    }

}
initGame(emoji);


async function sukti() {

    for(let g=0; g<3; g++) {
        for (let i = 0; i < emoji.length; i++) {
            // disp[0].children[i].style.top = top + `px`
            dispBox[g].children[i].style.transform = `translateY(900%)`;
        }
        await new Promise((res)=>{
            setTimeout(()=>{
                res()
            },100)
        })
    }
}
