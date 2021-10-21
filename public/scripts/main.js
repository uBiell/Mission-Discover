import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Check -> Open Modal -> Cancel -> Close Modal
const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button =>{
    button.addEventListener('click', handleClick)
})

// Delete -> Open Modal -> Cancel -> Close Modal
const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button =>{
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    // Const
    const text = check ? "Marcar como lida" : "Excluir"
    const form = document.querySelector(".modal form")
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id
    
    // Requisitons
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    // Change the modal text
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    
    // Change the button confirmation color
    check ? modalButton.classList.remove("red") : modalButton.classList.add('red')
    // Open modal
    modal.open()
}