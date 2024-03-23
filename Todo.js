function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');
    
    if (todoInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }
    
    var li = document.createElement('li');
   
    var span = document.createElement('span');
    span.textContent = todoInput.value;
    li.appendChild(span);
  
    var input = document.createElement('input');
    input.type = 'text';
    input.style.display = 'none'; 
    li.appendChild(input);
    
    var editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.onclick = function() {
        span.style.display = 'none'; 
        input.style.display = 'inline-block'; 
        input.value = span.textContent; 
        saveButton.style.display = 'inline-block';
        doneButton.style.display = 'inline-block'; 
    };
    li.appendChild(editButton);
    
    var saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.style.display = 'none'; 
    saveButton.onclick = function() {
        span.textContent = input.value; 
        span.style.display = 'inline-block'; 
        input.style.display = 'none'; 
        saveButton.style.display = 'none'; 
        editButton.style.display = 'inline-block'; 
        doneButton.style.display = 'none'; 
    };
    li.appendChild(saveButton);
    
    var doneButton = document.createElement('button');
    doneButton.textContent = 'Complete';
    doneButton.onclick = function() {
        span.style.textDecoration = 'line-through'; // Apply line-through style
        doneButton.disabled = true; // Disable the complete button after completion
    };
    li.appendChild(doneButton);
    
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '❌';
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };
    li.appendChild(deleteButton);
    
    li.style.listStyle = 'none'; 
    li.style.margin = '5px 0'; 
    
    todoList.appendChild(li);
    
    todoInput.value = '';
}
