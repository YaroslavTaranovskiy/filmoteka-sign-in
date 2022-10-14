import { authWithEmailAndPassword } from './auth'

const authModalOpenBtn = document.getElementById('auth-open-modal');


authModalOpenBtn.addEventListener('click', openModal)

function getAuthForm() {
    return `
         <button class="modal-close__btn" data-close-modal__window>
                <svg width="20" height="20" class="swiper__icon">
                    <use href="../images/sprite.svg#icon-close"></use>
                </svg>
            </button>
            <form class="auth-modal" id="auth-form">
                <div class="input-area-email">
                    <label for="email" class="label-email">E-mail</label>
                    <input type="text" id="email">
                </div>
                <div class="input-area-password">
                    <label for="password">Password</label>
                    <input type="text" id="password">
                </div>
                <button class="button button-auth-modal-btn" type="submit">
                    Sign in
                </button>
            </form>
    `
}

function createModal(title, content) {
    const modal = document.getElementById('auth-modal');
    modal.innerHTML = `
    <h2 class="auth-title">${title}</h2>
    ${content}
            
    `
}

function authFormHandler(event) {
    event.preventDefault()

    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authWithEmailAndPassword(email, password)
}

function openModal() {
    createModal('Sign in to your account', getAuthForm())
    document
        .getElementById('auth-modal')
        .addEventListener('submit', authFormHandler)
    
}