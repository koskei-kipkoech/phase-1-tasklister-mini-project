document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const description = e.target.new_task_description.value;
    const priority = e.target.priority.value
    handleToDoEvent(description,priority)
    form.reset()
  })
});


function handleToDoEvent(todo,priority){
  let li = document.createElement('li')
  let btn =document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'X'
  btn.style.backgroundColor = 'skyblue'
  btn.style.color = 'white'

  let taskSpan = document.createElement('span')
  taskSpan.textContent = ` ${todo} `

  let editBtn = document.createElement('button');
  editBtn.addEventListener('click',() => handleEdit(taskSpan));
  editBtn.textContent = ` Edit `
  editBtn.style.backgroundColor ='skyblue'
  editBtn.style.color = 'white'

  if(priority === 'high'){
    li.style.color = 'red';
  }else if (priority === 'medium'){
    li.style.color = 'Blue';
  }else if (priority === 'low'){
    li.style.color = 'green'
  }

  li.appendChild(taskSpan)
  li.appendChild(btn)
  li.appendChild(editBtn)
  //console.log(li)
  document.querySelector('#tasks').appendChild(li);
  
}

function handleDelete(e){
  e.target.parentNode.remove();
}

function handleEdit(taskSpan){
  const newDescriptionEvent = prompt("Edit Youe Task", taskSpan.textContent.trim());
  if (newDescriptionEvent){
    taskSpan.textContent = ` ${newDescriptionEvent} `
  }
}