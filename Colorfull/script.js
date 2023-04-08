
var container=document.getElementById("container");
var colors=["#FFDEB9","#FF5F9E","#16FF00","#FC2947","#865DFF","#865DFF","#82CD47","#2192FF"];
var squares=600
for(let i=0;i<squares;i++)
{
    const square=document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover",()=>
        setColor(square));
        square.addEventListener("mouseout",()=>
        removeColor(square));
     container.appendChild(square)
    
}
function setColor(element)
{
    var color=getRandomColor();
    element.style.background=color;
    element.style.boxShadow=`0 0 3px ${color},0 0 10px ${color}`


}


function removeColor(element){
    element.style.background="#1d1d1d"
    element.style.boxShadow="0 0 3px"
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}