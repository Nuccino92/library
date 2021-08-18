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
  
    let submit = document.getElementById('submit');

    // let fakeLibrary = new Books('the hobbit', 'tolkein', 390)

    // fakeLibrary.classList.add('.bookdiv')
    


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
        console.log(myLibrary)
        displayBooks()
        document.querySelector('form').reset();
    }
    
    submit.addEventListener('click', addBookToLibrary);

    function displayBooks() {
            
       for(let i = 0, len = myLibrary.length; i < len; i++) {

        for(let prop in myLibrary[i]) {
            console.log(prop, myLibrary[i][prop])
        }
    }



       


            // console.log(library.title)
            // console.log(library.author)
            // console.log(library.pages)
        }

        // for(let prop in myLibrary) 
            
        
        
            // let div = document.createElement('div');
            // div.id = 'bookdiv';
            // div.innerText = 'sdaasddas';

            // document.body.appendChild(div);
        
        
    

   
        
       

        
    

    
    


    







   