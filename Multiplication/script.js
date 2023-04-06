function getInfo()
{
    var input=document.getElementById("input").value;
    var output=document.getElementById("output");
    var clear=document.getElementById("clear");
    var text=document.getElementById("input");
if(input<=0 || input>1000)
{
    alert("LÜTFEN BELİRTİLEN ARALIKTA BİR SAYI GİRİNİZ(1-1000).")
}
else
{
    output.innerHTML="";
    output.style.display="block";
    for(let i=0;i<=10;i++)
    {
        var result=`${input}*${i}=${input*i} <hr>`;
        output.innerHTML+=result;
    }
    text.value="";
    clear.style.display="block";

}
}
function clearTable(){
    var output=document.getElementById("output");
    var clear=document.getElementById("clear");
    clear.style.display="none";
    output.style.display="none";
}