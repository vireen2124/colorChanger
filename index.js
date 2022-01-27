const myColor=["red","black","purple","pink","blue","yellow","orange","grey"];
const changeColor=document.querySelector(".change-color");
const backgroundColor=document.querySelector(".background-color")
let currentColor=0;
document.body.style.backgroundColor=myColor[currentColor];
backgroundColor.textContent=myColor[currentColor];
changeColor.addEventListener("click",()=>{
    myColorChanger();
    backgroundColor.textContent=myColor[currentColor]
    
})
const myColorChanger=()=>{
    if(currentColor===(myColor.length-1)){
        currentColor=0;
        document.body.style.backgroundColor=myColor[currentColor];
        backgroundColor.textContent=myColor[currentColor];
    }else{
        currentColor++
        document.body.style.backgroundColor=myColor[currentColor]
    } 
}
