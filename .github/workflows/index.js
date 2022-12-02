//forms have a submit event.
//forms have a default behaviour, our forms will always cause the page to refresh 
//removing the default behaviour using preventDefault method
//resetting form. set form to  event listener
//Dom contentLoaded make sure the js script does not load until the dom finishes loading
document.addEventListener('DOMContentLoaded',  () => {
 let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_todo.value) //target grabs a specific input new_todo and its value after submision
    form.reset()
})
 
})

function buildToDo (todo){
    console.log(todo)
    //creating a dom ellement and appending some info on it and append to document.
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo}`
    p.appendChild(btn)
    // remove child add event listener to the btn


    //to get element to the dom therefore asking the document querry selector to grab the todo container p
    document.querySelector('#todo_container').appendChild(p)
    //appendChild passes to the DOM its argument as a child of the elemnt we have selected
    //we have appended our new_todo on to the dom
}
//handlers...handle events and buid-add elements to the dom
//grab event and then the target of the event
function handleDelete (e){
e.target.parentNode.remove()
}






/*
//adding mouseover on the form
document.querySelector('form').addEventListener
('mouseover',  e => console.log(e))

//create an alert
document.querySelector('#alert').addEventListener
('click', alertMe)

function alertMe(){
    return alert ('Hi, you clicked me')
    console.log('Hi, you clicked me')

}

//log something
document.querySelector('#log').addEventListener
('click', () => console.log('I have been logged'))



//call that will delete tasks
//,target on an event object will return us the item the event was called on, instead of calling it btn call it event. 
//inner.target allows us to reference the original target value
function handleDelete (e){
    //e.target,innerText = 'Delete'
   //wil remove x //e.target.innerHTML = ''
  // e.target.remove()  //.remove method removes the button x here
  //console.log(e. target.parentNode.p) //to check parent node with .target
    e.target.parentNode.remove() //removes parent and children on the node

}


//Grabs a button and deletes parent node
function addEventListenerToDeleteButtons(){
let buttons = document.getElementsByClassName
('delete_btn') //this is an html collection element since for each wont work use for of to get the buttons.
for(let btn of buttons){
    btn.addEventListener('click', handleDelete)

}
}
addEventListenerToDeleteButtons()
*/

/*function consoleLogSomething(){
    return log ('You have logged me')
}*/


