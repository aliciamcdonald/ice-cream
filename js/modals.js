
// document.addEventListener('DOMContentLoaded', ()=>{
//    const openMenuBtn = document.querySelector('.header-menu-btn') ;
//    const modal = document.querySelector('.backdrop') ;
//    const  closeBtn =  document.querySelector('.modal-close-btn') ;

//    function openModal() {
//     modal.classList.add('active')
//    }

//    function closeModal() {
//     modal.classList.remove('active')
//    }

// openMenuBtn.addEventListener('click', openModal) ;
// closeBtn.addEventListener('click', closeModal)
// } )


document.addEventListener("DOMContentLoaded", () => {
   const modalButtons = document.querySelectorAll("[data-action]"); // Кнопки для открытия модалок
   const modals = document.querySelectorAll(".backdrop"); // Все модалки
   const closeButtons = document.querySelectorAll(".modal-close-btn"); // Кнопки закрития модалок
   const body = document.body;
 
   // Функция для открытия модалки
   function openModal(modalId) {
     const modal = document.getElementById(modalId);
     const currentModal = document.querySelector(".backdrop.active"); // Поточна активна модалка
 
     if (modal) {
       if (currentModal) {
         currentModal.classList.remove("active"); // Закриваємо тільки поточну модалку
       }
       modal.classList.add("active"); // Відкриваємо нову модалку
       body.style.overflow = "hidden"; // Заборона прокрутки
       window.addEventListener("keydown", onEscPress);
     }
   }
 
   // Функція для закриття модалки
   function closeModal(modal) {
     modal.classList.remove("active"); // Видаляємо клас для закриття модалки
 
     // Якщо більше немає активних модалок, відновлюємо прокрутку
     if (!document.querySelector(".backdrop.active")) {
       body.style.overflow = "";
       window.removeEventListener("keydown", onEscPress);
     }
   }
 
   // Відкриття модальних вікон по кліку
   modalButtons.forEach((button) => {
     button.addEventListener("click", (event) => {
       const modalId = button.getAttribute("data-action");
       openModal(modalId);
       event.stopPropagation(); // Запобігає спрацьовуванню закриття на бекдропі
     });
   });
 
   // Закриття модалок по кліку на бекдроп або кнопку "close-btn"
   modals.forEach((modal) => {
     modal.addEventListener("click", (event) => {
       console.log('event :>> ', event);
       if (
         event.target === modal || // Клік на бекдроп
         event.currentTarget.classList.contains("close-btn") // Клік на кнопку закриття
       ) {
         closeModal(modal);
       }
     });
   });
     // Закриття модалок по кліку на кнопку "хрестик"
     closeButtons.forEach((button) => {
       button.addEventListener("click", (event) => {
         const modal = button.closest(".backdrop"); // Шукаємо найближчу батьківську модалку
         closeModal(modal);
         event.stopPropagation(); // Блокуємо поширення події, щоб не спрацьовував бекдроп
       });
     });
 
   // Закриття останньої активної модалки по Escape
   function onEscPress(event) {
     if (event.key === "Escape") {
       const activeModal = document.querySelector(".backdrop.active");
       if (activeModal) closeModal(activeModal);
     }
   }
 });
 