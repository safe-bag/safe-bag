const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const accordionBody = accordion.querySelector('.accordion-body');
   

    header.addEventListener('click', () => {
        header.classList.toggle(`active`);
        accordionBody.classList.toggle('active')
    })
})