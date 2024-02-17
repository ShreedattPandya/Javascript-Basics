//Immediately Invoked Function Expression (IIFE)
// (function declaration) ();


(function chai(){  //named IIFE - chai()
    console.log(`This is named IIFE`);
})();

((name) => {
    console.log(`DB connected with ${name}`);
})("Birla")