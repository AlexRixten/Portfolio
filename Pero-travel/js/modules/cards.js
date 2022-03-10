import {getResource} from '../services/services';
function cards() {
    class MenuCard {
        constructor(types, name, hours, price, descr, img, parentSelector, ...classes) {
            this.types = types;
            this.name = name;
            this.hours = hours;
            this.price = price;
            this.descr = descr;
            this.img = img;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "slide-tour";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <div class="tour">
                    <div class="place">
                        <div class="subtitle subtitle-fz12w">${this.types}</div>
                        <div class="title title-fz14y">${this.name}</div>
                    </div>
                    <div class="info">
                        <div class="time subtitle subtitle-fz12w">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11.625C4.88748 11.625 3.79995 11.2951 2.87492 10.677C1.94989 10.0589 1.22892 9.18043 0.80318 8.1526C0.377437 7.12476 0.266043 5.99376 0.483085 4.90262C0.700127 3.81148 1.23586 2.8092 2.02253 2.02253C2.8092 1.23586 3.81148 0.700127 4.90262 0.483085C5.99376 0.266043 7.12476 0.377437 8.1526 0.80318C9.18043 1.22892 10.0589 1.94989 10.677 2.87492C11.2951 3.79995 11.625 4.88748 11.625 6C11.625 7.49184 11.0324 8.92259 9.97748 9.97748C8.92259 11.0324 7.49184 11.625 6 11.625ZM6 1.125C5.03582 1.125 4.09329 1.41092 3.2916 1.94659C2.48991 2.48226 1.86507 3.24363 1.49609 4.13442C1.12711 5.02521 1.03057 6.00541 1.21867 6.95107C1.40678 7.89673 1.87108 8.76537 2.55286 9.44715C3.23464 10.1289 4.10328 10.5932 5.04894 10.7813C5.99459 10.9694 6.97479 10.8729 7.86558 10.5039C8.75637 10.1349 9.51775 9.5101 10.0534 8.70841C10.5891 7.90672 10.875 6.96419 10.875 6C10.875 4.70707 10.3614 3.4671 9.44715 2.55286C8.53291 1.63862 7.29293 1.125 6 1.125Z" fill="white"/>
                                <path d="M7.59001 8.1225L5.73376 6.26625C5.699 6.23121 5.6715 6.18965 5.65284 6.14397C5.63418 6.09828 5.62472 6.04935 5.62501 6V3H6.37501V5.84625L8.12251 7.59L7.59001 8.1225Z" fill="white"/>
                            </svg> 
                            ${this.hours}
                        </div>
                        <div class="price subtitle subtitle-fz12w">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 4.41997C11.401 4.41997 12.78 3.92748 12.78 3.31997C12.78 2.71246 11.401 2.21997 9.7 2.21997C7.99896 2.21997 6.62 2.71246 6.62 3.31997C6.62 3.92748 7.99896 4.41997 9.7 4.41997Z" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.62 3.54004C6.62 3.74068 6.62 4.6594 6.62 4.86004C6.62 5.46746 7.99852 5.96004 9.7 5.96004C11.4015 5.96004 12.78 5.46746 12.78 4.86004C12.78 4.6594 12.78 3.74068 12.78 3.54004" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.28101 7.37654C8.70561 7.4553 9.18829 7.49996 9.70001 7.49996C11.4015 7.49996 12.78 7.00738 12.78 6.39996C12.78 6.19932 12.78 5.2806 12.78 5.07996" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.62 5.07996C6.62 5.2806 6.62 6.01936 6.62 6.01936" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.3855 8.93505C8.78414 9.00237 9.22964 9.03999 9.7 9.03999C11.4015 9.03999 12.78 8.54763 12.78 7.93999C12.78 7.73935 12.78 6.82064 12.78 6.62" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.36853 10.4722C8.77135 10.5413 9.22301 10.58 9.69997 10.58C11.4015 10.58 12.78 10.0877 12.78 9.48003C12.78 9.27939 12.78 8.36067 12.78 8.16003" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.29997 8.15996C7.00101 8.15996 8.37997 7.66747 8.37997 7.05996C8.37997 6.45245 7.00101 5.95996 5.29997 5.95996C3.59893 5.95996 2.21997 6.45245 2.21997 7.05996C2.21997 7.66747 3.59893 8.15996 5.29997 8.15996Z" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.21997 7.28003C2.21997 7.48067 2.21997 8.39939 2.21997 8.60003C2.21997 9.20767 3.59849 9.70003 5.29997 9.70003C7.00145 9.70003 8.37997 9.20767 8.37997 8.60003C8.37997 8.39939 8.37997 7.48067 8.37997 7.28003" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.21997 8.81995C2.21997 9.02059 2.21997 9.93931 2.21997 10.1399C2.21997 10.7476 3.59849 11.2399 5.29997 11.2399C7.00145 11.2399 8.37997 10.7476 8.37997 10.1399C8.37997 9.93931 8.37997 9.02059 8.37997 8.81995" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.21997 10.36C2.21997 10.5606 2.21997 11.4793 2.21997 11.68C2.21997 12.2876 3.59849 12.78 5.29997 12.78C7.00145 12.78 8.37997 12.2876 8.37997 11.68C8.37997 11.4793 8.37997 10.5606 8.37997 10.36" stroke="white" stroke-width="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${this.price} ₽
                        </div>
                    </div>
                    <div class="content subtitle subtitle-fz12w">
                        ${this.descr}
                    </div>
                    <button class="btn btn-slide">Подробнее</button>
                </div>
            `;
            element.style.background = `url('${this.img}') center center/cover no-repeat`;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/slide-tour')
        .then(data => {
            data.forEach(({types, name, hours, price, descr, img}) => {
                new MenuCard(types, name, hours, price, descr, img, ".popular .slider-wrapper").render();
            });
        });
}

export default cards;