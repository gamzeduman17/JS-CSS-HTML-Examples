const data=document.querySelector("#text");
const qrCode=document.querySelector("#qrCode");
const qrGenerator=document.querySelector("#qrGenerator");

const url="https://api.qrserver.com/v1/create-qr-code/";

qrGenerator.addEventListener("click",()=>{
    const size=`350x350`
    qrCode.src=`${url}?/size=${size}&data=${data.value}`
    if(data.value=="")
    {
        qrCode.src="/qr.png"
    }
})