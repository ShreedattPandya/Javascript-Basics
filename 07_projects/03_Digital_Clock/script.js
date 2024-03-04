const clock = document.getElementById('clock');

setInterval(function(){  // for continuous updation
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //In milisec