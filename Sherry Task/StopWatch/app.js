var hours = 0;
var minutes = 0;
var seconds = 0;
var m_seconds = 0;
var h_heading = document.getElementById('hour');
var m_heading = document.getElementById('min');
var s_heading = document.getElementById('sec');
var ms_heading = document.getElementById('msec');
var startBtn = document.getElementById("start-btn")
var stopBtn = document.getElementById("stop-btn")
var resetBtn = document.getElementById("reset-btn")
var time_interval;

function timer(){
    m_seconds++;
    ms_heading.innerHTML = m_seconds;
    if(m_seconds >= 100){
        seconds++;
        s_heading.innerHTML = seconds;
        m_seconds = 0;
        if(seconds >= 60){
            minutes++;
            m_heading.innerHTML = minutes;
            seconds = 0;
            if(minutes >= 60){
                hours++;
                h_heading.innerHTML = hours;
                minutes = 0;
            }
        }
    }
}

function start_timer(){
    startBtn.disabled = true
    stopBtn.disabled = false    
    time_interval = setInterval(timer, 10);
}

function stop_timer(){
    startBtn.disabled = false
    stopBtn.disabled = true    
    clearInterval(time_interval);
}

function reset_timer(){
    m_seconds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    h_heading.innerHTML = hours;
    ms_heading.innerHTML = m_seconds;
    m_heading.innerHTML = minutes;
    s_heading.innerHTML = seconds;
    startBtn.disabled = false
    stopBtn.disabled = false 
}

