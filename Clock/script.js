var hour1=document.getElementById("hour");
var minute1=document.getElementById("minute");
var second1=document.getElementById("second");
var pm_am1=document.getElementById("pm_am");

function updateTime()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let pmam="AM";

hour1.innerText=h;
minute1.innerText=m;
second1.innerText=s;
pm_am1.innerText=pmam;
setTimeout(()=>{
    updateTime();
},1000);
}






