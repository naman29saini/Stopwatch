let stopB=document.getElementById("stopBtn");
let startB=document.getElementById("startBtn");
let resetB=document.getElementById("resetBtn");
let displayTimer=document.querySelector(".displayTimer");
let timerId=null;
let msec = 0;
let sec = 0;
let min = 0;

stopB.addEventListener("click",()=>{
    clearInterval(timerId);
});
startB.addEventListener("click",()=>{
    if(timerId!==null)
    {
        clearInterval(timerId);
    }
   timerId= setInterval(startTimer,10);
});
resetB.addEventListener("click",()=>{
    clearInterval(timerId);
    displayTimer.innerHTML=`00 : 00 : 00`;
    msec=0;
    sec=0;
    min=0;
})
function startTimer()
{
    msec++;
    if(msec==100)
    {
        msec=0;
        sec++;
        if(sec==60)
        {
            sec=0;
            min++;
        }
    }
    let msecString= msec<10 ? `0${msec}`:msec;
    let secString= sec<10 ? `0${sec}`:sec;
    let minString= min<10 ? `0${min}`:min;
    displayTimer.innerHTML=` ${minString} : ${secString} : ${msecString}`;
}