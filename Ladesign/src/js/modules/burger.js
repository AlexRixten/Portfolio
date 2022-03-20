const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelectorAll(menuSelector),
          burgerElem = document.querySelector(burgerSelector);

    burgerElem.addEventListener('click', () => {
        burgerElem.classList.toggle('active');
        if(burgerElem.classList.contains('active')){
            menuElem.forEach(item  =>{
                item.classList.remove('menu');
                item.classList.add('title', 'title-h3');
                item.parentNode.style.left = '0';
                document.body.style.overflow = 'hidden';
            });
        } else{
            menuElem.forEach(item  =>{
                item.classList.add('menu');
                item.classList.remove('title', 'title-h3');
                item.parentNode.style.left = '-100%';
                document.body.style.overflow = '';
            });
        }
    });
    menuElem.forEach(item => {
        item.addEventListener('click', () => {
            burgerElem.classList.toggle('active');
            item.parentNode.style.left = '-100%';
            document.body.style.overflow = '';
        });
    });


};

export default burger;