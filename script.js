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
    
    let myLibrary = [];

    function Books(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
        this.info = function() {
            console.log(this.title + ' by ' + this.author + ', ' + this.pages + ' pages.');
            return this;
        }
    }


    function addBookToLibrary() {

    }







   