const myHexColors=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const changeColorHex=document.querySelector(".change-color-hex");
const background=document.querySelector(".background-color")
const randomHexColor=()=>{
    let a="#";
    for(let i=0;i<6;i++){
        a+=myHexColors[Math.floor((Math.random()*myHexColors.length))];
    }
    background.style.color=a;
    document.body.style.backgroundColor=a;
    background.textContent=a;

}
changeColorHex.addEventListener("click",()=>{  
    randomHexColor() 
})