

const navBtn = document.querySelector('.navBtn');
const taskAdder = document.querySelector('.task-adder');
const closeBtn = document.querySelector('.close');
const taskForm = document.querySelector('.taskForm');
const titleInput = document.querySelector('.titleInput');
const descriptionInput = document.querySelector('.descriptionInput');
const container = document.querySelector('.container');

navBtn.onclick = () => {
    taskAdder.classList.add('active');
}

closeBtn.onclick = () => {
    taskAdder.classList.remove('active');
}

let tasks = [];

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let task ={
        title: titleInput.value,
        description: descriptionInput.value,
        time: new Date().toLocaleString()
    }
    tasks.push(task);
    container.innerHTML = '';
    for(let i=0; i<tasks.length; i++){
        const list = document.createElement('div');
        list.classList.add('list');
        container.appendChild(list);
        const listContent = document.createElement('div');
        listContent.classList.add('list-content');
        list.appendChild(listContent);
        const contentTitle = document.createElement('div');
        contentTitle.classList.add('content-title');
        listContent.appendChild(contentTitle);
        const title = document.createElement('h2');
        title.innerText = tasks[i].title;
        contentTitle.appendChild(title);
        const $check = document.createElement('p');
        $check.classList.add('activeText');
        contentTitle.appendChild($check);
        const description = document.createElement('p');
        description.innerText = tasks[i].description;
        listContent.appendChild(description);
        const listBtns = document.createElement('div');
        listBtns.classList.add('list-btns');
        list.appendChild(listBtns);
        const time = document.createElement('p');
        time.innerText = tasks[i].time;
        listBtns.appendChild(time);
        const $delete = document.createElement('i');
        $delete.classList.add('bi', 'bi-trash3-fill', 'trash');
        listBtns.appendChild($delete);
        const $complete = document.createElement('i');
        $complete.classList.add('bi', 'bi-check-circle-fill', 'check');

        listBtns.appendChild($complete);
        const $uncomplete = document.createElement('i');
        $uncomplete.classList.add('bi' , 'bi-reply-fill', 'uncheck' , 'nonActive');

        listBtns.appendChild($uncomplete);
        $delete.onclick = () => {
            tasks.splice(i, 1);
            list.remove();
        }
        $complete.onclick = () => {
            $check.classList.remove('nonActive');
            $check.innerText = `(Completed: ${new Date().toLocaleString()})`;
            title.style.textDecoration = 'line-through';
            description.style.textDecoration = 'line-through';
            $complete.classList.add('nonActive');
            $uncomplete.classList.remove('nonActive');
        }

        $uncomplete.onclick = () => {
            $check.classList.add('nonActive');
            $check.innerText = '';
            title.style.textDecoration = 'none';
            description.style.textDecoration = 'none';
            $complete.classList.remove('nonActive');
            $uncomplete.classList.add('nonActive');
        }
        
    }

    

    titleInput.value = '';
    descriptionInput.value = '';

})