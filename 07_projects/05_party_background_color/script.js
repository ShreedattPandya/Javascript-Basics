const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let hash = '#'  //Use "let" here
    for(let i = 0; i < 6; i++){
        hash += hex[Math.floor(Math.random() * 16)];
    }
    return hash;
};

let intervalId;

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }

    function changeBgColor(){
        document.body.style.background = randomColor();
    };
};   

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; //To avoid intervalID overriding and make it in garbage-value(clear) & use if(!intervalid) since assigning intervalId to null
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);



