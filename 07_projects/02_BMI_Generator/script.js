const form = document.querySelector('form');
form.addEventListener('submit', function(work){
    work.preventDefault(); //prevents the default form submission

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height, this is a ${height}`;
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid height ${weight}`;
    }
    else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;  //CSS can be applied to this span too
    }
});