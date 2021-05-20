const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");
// const lists = document.querySelectorAll(".list-group-item");

/**function to generate a new todo li template into the ul*/
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

/**delete todo using the trash icon */
ul.addEventListener('click', e =>{
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


search.addEventListener('keyup', () =>{
        
    Array.from(ul.children)
        .filter((list) => !list.textContent.toLowerCase().includes(search.value.toLowerCase().trim()))
        .forEach(x => {
            x.classList.add('none');
          })

    Array.from(ul.children)
    .filter((list) => list.textContent.toLowerCase().includes(search.value.toLowerCase().trim()))
    .forEach(x => {
         x.classList.remove('none');
      })
     
    });




