/*  ==> Above is the Browser supported features:

document.getElementById('title').className  -> Obtain class name (.class won't)

document.getElementbyId('title').id  ->Gives id which is title

==> GetElement / SetElement

    document.getElementById('title').getAttribute('class')
    document.getElementById('title').setAttribute('class','test1 test2') -> Override content

const title = document.getElementById('title')

==> .style applied

    title.style.backgroundColor = 'red'
    title.style.borderRadius = "15px"

==> Three types of content providers 

    1) title.textContent => Ignores style attributes

    2) title.innerContent => uses style = "display none"

    3) title.innerHtml => also prints code inside of its tag -(whole span)

==> Query selector

    document.querySelector('h1')  => Gives only first one, else use querySelectorAll()
    document.querySelector("#id")

==> NOTE: Lists and Array have different methods, where map,    for-each are only available for array. To convert it first and use it see below::




==> const myul = document.querySelector('ul')
    myul.querySelector('li')
    
*/ 