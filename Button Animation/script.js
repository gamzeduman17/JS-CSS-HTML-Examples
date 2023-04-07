var button=document.querySelectorAll("a");
button.forEach(btn=>{
    btn.addEventListener("click",function(s){
        var z=s.clientX-s.target.offsetLeft;
        var y=s.clientY-s.target.offsetTop;
        
        var when_click=document.createElement("span");
        when_click.style.left=z+"px";
        when_click.style.top=y+"px";
        this.appendChild(when_click);
        setTimeout(()=>{
            when_click.remove()
        },800);

        
        
    })
})