var min=0;
var sec=0;
var msec=0;
var Min= document.getElementById("min");
var Sec= document.getElementById("sec");
var Msec= document.getElementById("msec");
var interval;

function timer(){
msec++;
Msec.innerHTML=msec;    
if(msec>=100)
{
    sec++;
    Sec.innerHTML=sec;
    msec=0;
    

}else if(sec>=60)
{
min++
sec=0;
Min.innerHTML=min;
document.box.style.backgroundColor = "red";

}
}

function start(){
interval =setInterval(timer,10)
document.getElementById("a").disabled = true;
}
function stop(){

    clearInterval(interval);
    document.getElementById("a").disabled = false;
}

function reset(){

    document.getElementById("y").innerHTML= min
    document.getElementById("x").innerHTML= sec
    document.getElementById("z").innerHTML= msec
    min=0;
    sec=0;
    msec=0;
    Min.innerHTML=min;
    Sec.innerHTML=sec;
    Msec.innerHTML=msec;
    clearInterval(interval);
    
}
