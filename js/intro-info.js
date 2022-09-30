const intro_dialog = document.getElementById('intro');
intro_dialog.showModal()

const intro_close = document.querySelector('#intro .close-intro')

intro_close.addEventListener('click',()=>intro_dialog.close())