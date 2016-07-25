// 
// Ф-и clearField() очистки игрового поля от чисел
//

var clearBtn = document.getElementById('clear-btn');

function clearField() {
    var field = document.querySelectorAll('.cell');
    var gameField = document.querySelector('.table-container');
    
    gameFieldActiveDelete();
    
    for (var i = 0; i < field.length; i++) {
        field[i].innerHTML = '';
        field[i].style.background = '';
        field[i].classList.remove('active');
        field[i].classList.remove('color-color');
    };
    
    gameField.style.background = '';
    imgBlock.src = 'img/1.png';
};

clearBtn.onclick = clearField;