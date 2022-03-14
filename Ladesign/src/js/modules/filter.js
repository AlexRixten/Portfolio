const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnFlat = menu.querySelector('.flat'),
          btnHouse = menu.querySelector('.house'),
          btnRoom = menu.querySelector('.room'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markFlat = wrapper.querySelectorAll('.flat'),
          markHouse = wrapper.querySelectorAll('.house'),
          markRoom = wrapper.querySelectorAll('.room'),
          no = document.querySelector('.portfolio-no'),
          btn = document.querySelector('.accordion-btn');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType){
            console.log(123)
            markType.forEach(mark =>{
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
                btn.style.display = 'block';
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
            btn.style.display = 'none';
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnFlat.addEventListener('click', () => {
        typeFilter(markFlat);
    });

    btnHouse.addEventListener('click', () => {
        typeFilter(markHouse);
    });

    btnRoom.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.tagName == "LI"){
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;