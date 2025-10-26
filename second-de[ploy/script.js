// --------- SPA Navigation ----------
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', () => {
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(link.dataset.page).classList.add('active');
  });
});

// --------- Calculator -------------
const calcDisplay = document.getElementById('calc-display');
const calcButtons = document.querySelectorAll('.calc-buttons button');
let calcExp = '';

calcButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;
    if (val === 'C') {
      calcExp = '';
      calcDisplay.value = '';
    } else if (val === '=') {
      try {
        calcExp = eval(calcExp).toString();
        calcDisplay.value = calcExp;
      } catch {
        calcDisplay.value = 'Error';
        calcExp = '';
      }
    } else {
      calcExp += val;
      calcDisplay.value = calcExp;
    }
  });
});

// --------- Digital Clock ----------
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById('time').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// --------- To-Do List -------------
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('tasks');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => li.classList.toggle('completed'));

  const delBtn = document.createElement('button');
  delBtn.textContent = '✕';
  delBtn.addEventListener('click', () => li.remove());

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});

taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTaskBtn.click();
});
