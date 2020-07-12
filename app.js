var min=0;
var sec=0;
var msec=0;
var hour=0;
var interval;
var b=document.getElementById("min");
var c=document.getElementById("sec");
var d=document.getElementById("msec");
var h=document.getElementById("hour");

function start(){
function timer() {
    msec++;
    d.innerHTML=msec;
    if(msec>=100){
        sec++;
        c.innerHTML=sec;
        msec=0;
    }
        else if( sec>=60){
            min++;
            b.innerHTML=min;
            sec=0;
        }
   else if(min>=60){
       hour++;
       h.innerHTML=hour;
   }     
}
 interval=setInterval(timer,10);
 document.getElementById("b1").disabled=true;


        

} 

function stop(){
    clearInterval(interval);
    document.getElementById("b1").disabled=false;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    b.innerHTML=min;
    c.innerHTML=sec;
    d.innerHTML=msec;
    stop();
    document.getElementById("b1").disabled=false;
}

    

    
    

