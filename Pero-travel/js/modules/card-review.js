import {getResource} from '../services/services';
function cardsReview() {
    class CardReview {
        constructor(name, age, review, img, parentSelector, ...classes) {
            this.name = name;
            this.age = age;
            this.review = review;
            this.img = img;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }


        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "slide-reviews";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src="${this.img}" alt="member">
                <div class="review">
                    <div class="subtitle subtitle-fz14b">${this.name}, ${this.age} лет</div>
                    <div class="subtitle subtitle-fz14">
                        ${this.review}
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/slide-reviews')
        .then(data => {
            data.forEach(({name, age, review, img}) => {
                new CardReview(name, age, review, img, ".reviews .slider__wrapper").render();
            });
        });
}

export default cardsReview;