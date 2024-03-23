
 var h1 = document.querySelector("h1");
 var h2 = document.querySelector("h2");
function displayDateTime() {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDate = new Date();
    
    var day = daysOfWeek[currentDate.getDay()];
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1; 
    var year = currentDate.getFullYear();
    
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var amOrPm = hours >= 12 ? 'PM' : 'AM';
   h1.innerHTML = day + ', ' + date + '/' + month + '/' + year 
   h2.innerHTML= hours + ':' + minutes + ' '+ amOrPm ;
    
    console.log(formattedDateTime);
  }
  
  displayDateTime();

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
        span.style.textDecoration = 'line-through'; 
        doneButton.disabled = true; 
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
