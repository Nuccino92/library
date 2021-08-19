const openModalButtons = document.querySelectorAll('[data-open-button]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const cardGrid = document.querySelector('.cardGrid')


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.openButton) //selects #modal and passes it to const modal
        openModal(modal) // then passes modal into the function
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')  // adding a class to apply the pre made css.
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal);
    })
})

let submit = document.getElementById('submit');

let myLibrary = [];

function Books(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary() {
    let library = new Books;
    
    library.title = document.getElementById('title').value;
    library.author = document.getElementById('author').value;
    library.pages = document.getElementById('pages').value;  
    
    myLibrary.push(library)
    // console.log(myLibrary)
    displayBooks()
    document.querySelector('form').reset();
}

submit.addEventListener('click', addBookToLibrary);

function displayBooks() {

    cardGrid.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++) {
        
    let divi = document.createElement('div');
        divi.className = 'cardDiv'
        divi.innerText = 'TITLE'
        document.querySelector('.cardGrid').appendChild(divi)
    
    let paraOne = document.createElement('p'); 
        paraOne.innerText = myLibrary[i].title
        divi.appendChild(paraOne);  

    let paraTwo = document.createElement('p'); 
        paraTwo.innerText = `Author:  ${myLibrary[i].author}`
        divi.appendChild(paraTwo); 
    
        let paraThree = document.createElement('p'); 
        paraThree.innerText = `Pages:  ${myLibrary[i].pages}`
        divi.appendChild(paraThree); 
    }              
}
  
        
    

   
        
       

        
    

    
    


    







   