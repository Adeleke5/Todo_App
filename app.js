const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");

const generateli = (newEntry) => {
    li = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${newEntry}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>`;
    ul.innerHTML += li;
}


// fetch input strings from keyboad and add to the list
addForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newEntry = addForm.add.value.trim();
        if(newEntry.length > 0){
            generateli(newEntry);        
        } else {}

        addForm.reset();
});



