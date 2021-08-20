const openModalButtons = document.querySelectorAll('[data-open-button]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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

const cardGrid = document.querySelector('.cardGrid')
let submit = document.getElementById('submit');
submit.addEventListener('click', addBookToLibrary);

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
     
    if(library.title == 0 || library.author == 0 || library.pages == 0) {
        return;
    }
    
    for(let i = 0; i < myLibrary.length; i++) {
        if(library.title.toLowerCase() === myLibrary[i].title.toLowerCase()) {
            alert("You already have " + myLibrary[i].title + " included."); return;
        }
    }
    if (!isNaN(library.author)) {
        alert('Please enter an Authors name'); return; 
    } 

    if (isNaN(library.pages)) {
        alert('Please enter a Page number'); return; 
    } 
    
    myLibrary.push(library)
    closeModal(modal);
    displayBooks()
    document.querySelector('form').reset();
}

function displayBooks() {

    cardGrid.innerHTML = ''; //clear the grid each time you pass

    for(let i = 0; i < myLibrary.length; i++) {
    
    let divi = document.createElement('div');
        divi.className = 'cardDiv';
        divi.id = 'cardId'
        divi.innerText = 'BOOK';
        document.querySelector('.cardGrid').appendChild(divi);
    
    let paraOne = document.createElement('p'); 
        paraOne.innerText = myLibrary[i].title;
        paraOne.className = 'paraOneClass'
        paraOne.id = 'para';
        divi.appendChild(paraOne);  

    let paraTwo = document.createElement('p'); 
        paraTwo.innerText = `Author:  ${myLibrary[i].author}`;
        paraTwo.id = 'para';
        divi.appendChild(paraTwo); 
    
    let paraThree = document.createElement('p'); 
        paraThree.innerText = `Pages:  ${myLibrary[i].pages}`;
        paraThree.id = 'para';
        divi.appendChild(paraThree); 

    let readStatus = document.createElement('span');  // true / false button
        readStatus.innerText = 'Not Read';
        readStatus.id = 'readStat';
        readStatus.addEventListener('click', () => {  // toggles read true/false
        
            if(myLibrary[i].read == false) {
                myLibrary[i].read = true;       
            }
            else{myLibrary[i].read = false}; 

            if (myLibrary[i].read == false) {
                readStatus.innerText = 'Not Read'; (readStatus.style.backgroundColor = 'rgb(119, 38, 31)');
            }
            if (myLibrary[i].read == true) {
                (readStatus.innerText = 'Read'), (readStatus.style.backgroundColor = 'green');
            }

    })
        divi.appendChild(readStatus);
    
    let removeButton = document.createElement('btn'); // remove button
        removeButton.innerText = 'Remove';
        removeButton.id = 'removeButton';
        removeButton.addEventListener('click', () => {
            divi.remove();
            
            for(let i = myLibrary.length - 1; i >= 0; i--) {    //removes book from myLibrary on click
                if (paraOne.innerText == myLibrary[i].title) 
                myLibrary.splice(i, 1);         
            }      
        })
        divi.appendChild(removeButton);
    }            
}

    
  



// const saveLocal = () => {
        //     localStorage.setItem('BookList', JSON.stringify(myLibrary));  
        //     console.log(localStorage)
        // }

   
        
       

        
    

    
    


    







   