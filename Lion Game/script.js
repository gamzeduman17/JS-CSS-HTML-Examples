var lion=document.getElementById("lion");
var tree=document.getElementById("tree");
function jump(){
    if(lion.classList!="jump"){
        lion.classList.add("jump");
        setTimeout(function(){
            lion.classList.remove("jump");
        },300);


    }
}
var isAlive=setInterval(function(){
    var lionTop=parseInt(window.getComputedStyle(lion).getPropertyValue("top"));
    var  treeLeft=parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    if(treeLeft<50 && treeLeft>0 &&lionTop>=140){
        alert("GAME OVER");
    }
},10);
document.addEventListener("keydown",function(event){
    jump();
})