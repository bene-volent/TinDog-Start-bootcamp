const intro_dialog = document.getElementById('intro');
setTimeout(()=>{
intro_dialog.showModal()
},500)

const intro_close = document.querySelector('#intro .close-intro')

intro_close.addEventListener('click',()=>intro_dialog.close())