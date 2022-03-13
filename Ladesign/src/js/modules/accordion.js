const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.innerHTML = `
                <img src="assets/img/accordion/arrow_up.svg" alt="arrow_up">
            `
            this.parentNode.classList.toggle('active-style');
            this.parentNode.nextElementSibling.classList.toggle('active-content');

            if (this.parentNode.classList.contains('active-style')) {
                this.parentNode.nextElementSibling.style.maxHeight = this.parentNode.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.parentNode.nextElementSibling.style.maxHeight = '0px';
                this.innerHTML = `
                <img src="assets/img/accordion/arrow_down.svg" alt="arrow_down">
            `
            }
        });
    });
    //       blocks = document.querySelectorAll(itemsSelector);
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')){
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
    // <span><img src="assets/img/accordion/arrow_down.svg" alt="arrow_down"></img>

};

export default accordion;