let [secs, mins, hrs] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopwatch(){
    secs++;
    if(secs == 60){
        secs = 0;
        mins++;
        if(mins == 60){
            mins = 0;
            hrs++;
        }
    }

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = hrs < 10 ? "0" + mins : mins;
    let s = hrs < 10 ? "0" + secs : secs;
    displayTime.innerHTML = h + " : " + m + " : " + s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [secs, mins, hrs] = [0, 0, 0];
    displayTime.innerHTML = "00 : 00 : 00";
}