const arrayList = [];

function addData () {

    let todoHTML = '';
    for (let i = 0; i < arrayList.length; i++) {
    
        const todo = arrayList[i];
        const html = `<p>${todo}</p>`;
        todoHTML += html;
    }
    
      document.querySelector('.todo-list').innerHTML = todoHTML;

}


const addTodo = () => {

    const inputName = document.querySelector(".input-name");
    const name = inputName.value
    arrayList.push(name); 
    inputName.value = '';
    addData();
}










