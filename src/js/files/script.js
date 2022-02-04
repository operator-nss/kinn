// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";


function scroll() {
   const mainImage = document.querySelector('.main-image__container');

   let header = document.querySelector('.header');

   if (this.window.pageYOffset > mainImage.offsetHeight) {
      header.classList.add('_scroll');
   } else {
      header.classList.remove('_scroll');
   }

}

window.addEventListener('scroll',scroll);


//связь  кнопки и откр соотв меню

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

      if (subMenu) {
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');


         if (activeLink && activeLink !== targetElement) {
            activeLink.classList.remove('_sub-menu-active');
            activeBlock.classList.remove('_sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');
         }

         document.documentElement.classList.toggle('sub-menu-open');
         targetElement.classList.toggle('_sub-menu-active');
         subMenu.classList.toggle('_sub-menu-open');
      }
      e.preventDefault();
   }


   if (targetElement.closest('.page')) {
      document.documentElement.classList.remove('sub-menu-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
      e.preventDefault();
   }
}
