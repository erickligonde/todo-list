let container = document.querySelector('.container')
let app = document.querySelector('.todo-app')
let textbox = document.querySelector('#new-task')
let add = document.querySelector('#add-task')
let list = document.querySelector('#task-list')




add.addEventListener('click', function(){
    if (textbox.value !== ('')){
        let newEl = document.createElement('li')
        let nar = document.getElementById('task-list').appendChild(newEl)
        newEl.innerHTML = textbox.value
        newEl.style.cursor = 'pointer'
        newEl.addEventListener('click', function(){
            newEl.style.textDecoration = 'line-through'
        })
    }
    
})

textbox.addEventListener('keydown', function(e){
    if ((e.key === 'Enter')) {
        let newEl = document.createElement('li')
        let nar = document.getElementById('task-list').appendChild(newEl)
        newEl.innerHTML = textbox.value
        newEl.style.cursor = 'pointer'
        newEl.addEventListener('click', function(){
            newEl.style.textDecoration = 'line-through'
        })
    }
})

