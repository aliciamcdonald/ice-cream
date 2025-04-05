
document.addEventListener('DOMContentLoaded', ()=>{
   const openMenuBtn = document.querySelector('.header-menu-btn') ;
   const modal = document.querySelector('.backdrop') ;
   const  closeBtn =  document.querySelector('.modal-close-btn') ;

   function openModal() {
    modal.classList.add('active')
   }

   function closeModal() {
    modal.classList.remove('active')
   }

openMenuBtn.addEventListener('click', openModal) ;
closeBtn.addEventListener('click', closeModal)
} )