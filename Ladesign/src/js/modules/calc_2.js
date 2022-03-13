const calc_2 = (state) => {

    const sizeBlock = document.querySelectorAll('#size'),
          materialBlock = document.querySelectorAll('#material'), 
          optionsBlock = document.querySelectorAll('#options'), 
          promocodeBlock = document.querySelectorAll('.promocode'),
          resultBlock = document.querySelectorAll('.calc-price');

          function bindActionToElems (event, elem, prop) {
                console.log(elem)
            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    console.log(item)
                    console.log(item.nodeName)
                    console.log(item.getAttribute('type'))
                    switch(item.nodeName) {
                        case 'SPAN' :
                            
                            
                            break;
                        case 'INPUT' :
                            if (item.getAttribute('type') === 'checkbox') {
                                i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                                elem.forEach((box, j) => {
                                    box.checked = false;
                                    if (i == j) {
                                        box.checked = true;
                                    }
                                });
                            } else {
                                state[prop] = item.value;
                            }
                            break;
                        case 'SELECT' :
                            state[prop] = item.value;
                            break;
                        case 'DIV' :
                            if (sizeBlock.value == '' || materialBlock.value == ''){
                                item.innerText = 'Пожалуйста, выберите размер и материал картины';
                            }
                            break;
                    }
    
                    console.log(state);
                });
            });
        }
    
        bindActionToElems('change', sizeBlock, 'size');
        bindActionToElems('change', materialBlock, 'material');
        bindActionToElems('change', optionsBlock, 'options');
        bindActionToElems('input', promocodeBlock, 'promocode');
        bindActionToElems('click', resultBlock, 'result');


};

export default calc_2;